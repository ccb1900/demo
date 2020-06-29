(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{418:function(e,a,s){"use strict";s.r(a);var n=s(43),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"paxos-made-simple"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paxos-made-simple"}},[e._v("#")]),e._v(" Paxos Made Simple")]),e._v(" "),s("p",[e._v("Leslie Lamport")]),e._v(" "),s("p",[e._v("01 Nov 2001")]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("The Paxos algorithm, when presented in plain English, is very simple.")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("The Paxos algorithm for implementing a fault-tolerant distributed system\nhas been regarded as difficult to understand, perhaps because the original\npresentation was Greek to many readers [5]. In fact, it is among the simplest and most obvious of distributed algorithms. At its heart is a consensus\nalgorithm—the “synod” algorithm of [5]. The next section shows that this\nconsensus algorithm follows almost unavoidably from the properties we want\nit to satisfy. The last section explains the complete Paxos algorithm, which\nis obtained by the straightforward application of consensus to the state machine approach for building a distributed system—an approach that should\nbe well-known, since it is the subject of what is probably the most often-cited\narticle on the theory of distributed systems [4].")]),e._v(" "),s("h2",{attrs:{id:"the-consensus-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-consensus-algorithm"}},[e._v("#")]),e._v(" The Consensus Algorithm")]),e._v(" "),s("h3",{attrs:{id:"_2-1-the-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-the-problem"}},[e._v("#")]),e._v(" 2.1. The Problem")]),e._v(" "),s("p",[e._v("Assume a collection of processes that can propose values. A consensus algorithm ensures that a single one among the proposed values is chosen. If\nno value is proposed, then no value should be chosen. If a value has been\nchosen, then processes should be able to learn the chosen value. The safety\nrequirements for consensus are:")]),e._v(" "),s("ul",[s("li",[e._v("Only a value that has been proposed may be chosen,")]),e._v(" "),s("li",[e._v("Only a single value is chosen, and")]),e._v(" "),s("li",[e._v("A process never learns that a value has been chosen unless it actually\nhas been.")])]),e._v(" "),s("p",[e._v("We won’t try to specify precise liveness requirements. However, the goal is\nto ensure that some proposed value is eventually chosen and, if a value has\nbeen chosen, then a process can eventually learn the value.\nWe let the three roles in the consensus algorithm be performed by three\nclasses of agents: "),s("code",[e._v("proposers")]),e._v(", "),s("code",[e._v("acceptors")]),e._v(", and "),s("code",[e._v("learners")]),e._v(". In an implementation,\na single process may act as more than one agent, but the mapping from\nagents to processes does not concern us here.\nAssume that agents can communicate with one another by sending messages. We use the customary asynchronous, non-Byzantine model, in which:")]),e._v(" "),s("ul",[s("li",[e._v("Agents operate at arbitrary speed, may fail by stopping, and may\nrestart. Since all agents may fail after a value is chosen and then\nrestart, a solution is impossible unless some information can be remembered by an agent that has failed and restarted.")]),e._v(" "),s("li",[e._v("Messages can take arbitrarily long to be delivered, can be duplicated,\nand can be lost, but they are not corrupted.")])]),e._v(" "),s("h3",{attrs:{id:"_2-2-choosing-a-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-choosing-a-value"}},[e._v("#")]),e._v(" 2.2. Choosing a Value")]),e._v(" "),s("p",[e._v("The easiest way to choose a value is to have a single acceptor agent. A proposer sends a proposal to the acceptor, who chooses the first proposed value\nthat it receives. Although simple, this solution is unsatisfactory because the\nfailure of the acceptor makes any further progress impossible.\nSo, let’s try another way of choosing a value. Instead of a single acceptor,\nlet’s use multiple acceptor agents. A proposer sends a proposed value to a\nset of acceptors. An acceptor may accept the proposed value. The value is\nchosen when a large enough set of acceptors have accepted it. How large is\nlarge enough? To ensure that only a single value is chosen, we can let a large\nenough set consist of any majority of the agents. Because any two majorities\nhave at least one acceptor in common, this works if an acceptor can accept\nat most one value. (There is an obvious generalization of a majority that\nhas been observed in numerous papers, apparently starting with [3].)\nIn the absence of failure or message loss, we want a value to be chosen\neven if only one value is proposed by a single proposer. This suggests the\nrequirement:\nP1. An acceptor must accept the first proposal that it receives.\nBut this requirement raises a problem. Several values could be proposed by\ndifferent proposers at about the same time, leading to a situation in which\nevery acceptor has accepted a value, but no single value is accepted by a\nmajority of them. Even with just two proposed values, if each is accepted by\nabout half the acceptors, failure of a single acceptor could make it impossible\nto learn which of the values was chosen.\nP1 and the requirement that a value is chosen only when it is accepted\nby a majority of acceptors imply that an acceptor must be allowed to accept\nmore than one proposal. We keep track of the different proposals that an\nacceptor may accept by assigning a (natural) number to each proposal, so a\nproposal consists of a proposal number and a value. To prevent confusion,\nwe require that different proposals have different numbers. How this is\nachieved depends on the implementation, so for now we just assume it. A\nvalue is chosen when a single proposal with that value has been accepted by\na majority of the acceptors. In that case, we say that the proposal (as well\nas its value) has been chosen.\nWe can allow multiple proposals to be chosen, but we must guarantee\nthat all chosen proposals have the same value. By induction on the proposal\nnumber, it suffices to guarantee:\nP2. If a proposal with value v is chosen, then every higher-numbered proposal that is chosen has value v.\nSince numbers are totally ordered, condition P2 guarantees the crucial safety\nproperty that only a single value is chosen.\nTo be chosen, a proposal must be accepted by at least one acceptor. So,\nwe can satisfy P2 by satisfying:\nP2a\n. If a proposal with value v is chosen, then every higher-numbered proposal accepted by any acceptor has value v.\nWe still maintain P1 to ensure that some proposal is chosen. Because communication is asynchronous, a proposal could be chosen with some particular acceptor c never having received any proposal. Suppose a new proposer\n“wakes up” and issues a higher-numbered proposal with a different value.\nP1 requires c to accept this proposal, violating P2a\n. Maintaining both P1\nand P2a\nrequires strengthening P2a\nto:\nP2b\n. If a proposal with value v is chosen, then every higher-numbered proposal issued by any proposer has value v.\nSince a proposal must be issued by a proposer before it can be accepted by\nan acceptor, P2b\nimplies P2a\n, which in turn implies P2.\nTo discover how to satisfy P2b\n, let’s consider how we would prove that\nit holds. We would assume that some proposal with number m and value\nv is chosen and show that any proposal issued with number n > m also\nhas value v. We would make the proof easier by using induction on n,\nso we can prove that proposal number n has value v under the additional\nassumption that every proposal issued with a number in m . .(n − 1) has\nvalue v, where i . . j denotes the set of numbers from i through j. For the\nproposal numbered m to be chosen, there must be some set C consisting of a\nmajority of acceptors such that every acceptor in C accepted it. Combining\nthis with the induction assumption, the hypothesis that m is chosen implies:")]),e._v(" "),s("p",[e._v("Every acceptor in C has accepted a proposal with number in\nm . .(n − 1), and every proposal with number in m . .(n − 1)\naccepted by any acceptor has value v.\nSince any set S consisting of a majority of acceptors contains at least one\nmember of C , we can conclude that a proposal numbered n has value v by\nensuring that the following invariant is maintained:\nP2c\n. For any v and n, if a proposal with value v and number n is issued,\nthen there is a set S consisting of a majority of acceptors such that\neither (a) no acceptor in S has accepted any proposal numbered less\nthan n, or (b) v is the value of the highest-numbered proposal among\nall proposals numbered less than n accepted by the acceptors in S.\nWe can therefore satisfy P2b by maintaining the invariance of P2c\n.\nTo maintain the invariance of P2c\n, a proposer that wants to issue a proposal numbered n must learn the highest-numbered proposal with number\nless than n, if any, that has been or will be accepted by each acceptor in\nsome majority of acceptors. Learning about proposals already accepted is\neasy enough; predicting future acceptances is hard. Instead of trying to predict the future, the proposer controls it by extracting a promise that there\nwon’t be any such acceptances. In other words, the proposer requests that\nthe acceptors not accept any more proposals numbered less than n. This\nleads to the following algorithm for issuing proposals.")]),e._v(" "),s("ol",[s("li",[e._v("A proposer chooses a new proposal number n and sends a request to\neach member of some set of acceptors, asking it to respond with:\n(a) A promise never again to accept a proposal numbered less than\nn, and\n(b) The proposal with the highest number less than n that it has\naccepted, if any.\nI will call such a request a prepare request with number n.")]),e._v(" "),s("li",[e._v("If the proposer receives the requested responses from a majority of\nthe acceptors, then it can issue a proposal with number n and value\nv, where v is the value of the highest-numbered proposal among the\nresponses, or is any value selected by the proposer if the responders\nreported no proposals.")])]),e._v(" "),s("p",[e._v("A proposer issues a proposal by sending, to some set of acceptors, a request\nthat the proposal be accepted. (This need not be the same set of acceptors\nthat responded to the initial requests.) Let’s call this an accept request.\nThis describes a proposer’s algorithm. What about an acceptor? It can\nreceive two kinds of requests from proposers: prepare requests and accept\nrequests. An acceptor can ignore any request without compromising safety.\nSo, we need to say only when it is allowed to respond to a request. It can\nalways respond to a prepare request. It can respond to an accept request,\naccepting the proposal, iff it has not promised not to. In other words:\nP1a\n. An acceptor can accept a proposal numbered n iff it has not responded\nto a prepare request having a number greater than n.\nObserve that P1a\nsubsumes P1.\nWe now have a complete algorithm for choosing a value that satisfies the\nrequired safety properties—assuming unique proposal numbers. The final\nalgorithm is obtained by making one small optimization.\nSuppose an acceptor receives a prepare request numbered n, but it has\nalready responded to a prepare request numbered greater than n, thereby\npromising not to accept any new proposal numbered n. There is then no\nreason for the acceptor to respond to the new prepare request, since it will\nnot accept the proposal numbered n that the proposer wants to issue. So\nwe have the acceptor ignore such a prepare request. We also have it ignore\na prepare request for a proposal it has already accepted.\nWith this optimization, an acceptor needs to remember only the highestnumbered proposal that it has ever accepted and the number of the highestnumbered prepare request to which it has responded. Because P2c must\nbe kept invariant regardless of failures, an acceptor must remember this\ninformation even if it fails and then restarts. Note that the proposer can\nalways abandon a proposal and forget all about it—as long as it never tries\nto issue another proposal with the same number.\nPutting the actions of the proposer and acceptor together, we see that\nthe algorithm operates in the following two phases.\nPhase 1. (a) A proposer selects a proposal number n and sends a prepare\nrequest with number n to a majority of acceptors.\n(b) If an acceptor receives a prepare request with number n greater\nthan that of any prepare request to which it has already responded,\nthen it responds to the request with a promise not to accept any more\nproposals numbered less than n and with the highest-numbered proposal (if any) that it has accepted.")]),e._v(" "),s("p",[e._v("Phase 2. (a) If the proposer receives a response to its prepare requests\n(numbered n) from a majority of acceptors, then it sends an accept\nrequest to each of those acceptors for a proposal numbered n with a\nvalue v, where v is the value of the highest-numbered proposal among\nthe responses, or is any value if the responses reported no proposals.\n(b) If an acceptor receives an accept request for a proposal numbered\nn, it accepts the proposal unless it has already responded to a prepare\nrequest having a number greater than n.\nA proposer can make multiple proposals, so long as it follows the algorithm\nfor each one. It can abandon a proposal in the middle of the protocol at any\ntime. (Correctness is maintained, even though requests and/or responses\nfor the proposal may arrive at their destinations long after the proposal\nwas abandoned.) It is probably a good idea to abandon a proposal if some\nproposer has begun trying to issue a higher-numbered one. Therefore, if an\nacceptor ignores a prepare or accept request because it has already received\na prepare request with a higher number, then it should probably inform\nthe proposer, who should then abandon its proposal. This is a performance\noptimization that does not affect correctness.")]),e._v(" "),s("h3",{attrs:{id:"_2-3-learning-a-chosen-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-learning-a-chosen-value"}},[e._v("#")]),e._v(" 2.3. Learning a Chosen Value")]),e._v(" "),s("p",[e._v("To learn that a value has been chosen, a learner must find out that a proposal has been accepted by a majority of acceptors. The obvious algorithm\nis to have each acceptor, whenever it accepts a proposal, respond to all\nlearners, sending them the proposal. This allows learners to find out about\na chosen value as soon as possible, but it requires each acceptor to respond\nto each learner—a number of responses equal to the product of the number\nof acceptors and the number of learners.\nThe assumption of non-Byzantine failures makes it easy for one learner\nto find out from another learner that a value has been accepted. We can\nhave the acceptors respond with their acceptances to a distinguished learner,\nwhich in turn informs the other learners when a value has been chosen. This\napproach requires an extra round for all the learners to discover the chosen\nvalue. It is also less reliable, since the distinguished learner could fail. But\nit requires a number of responses equal only to the sum of the number of\nacceptors and the number of learners.\nMore generally, the acceptors could respond with their acceptances to\nsome set of distinguished learners, each of which can then inform all the\nlearners when a value has been chosen. Using a larger set of distinguished\nlearners provides greater reliability at the cost of greater communication\ncomplexity.\nBecause of message loss, a value could be chosen with no learner ever\nfinding out. The learner could ask the acceptors what proposals they have\naccepted, but failure of an acceptor could make it impossible to know whether\nor not a majority had accepted a particular proposal. In that case, learners\nwill find out what value is chosen only when a new proposal is chosen. If\na learner needs to know whether a value has been chosen, it can have a\nproposer issue a proposal, using the algorithm described above.")]),e._v(" "),s("h3",{attrs:{id:"_2-4-progress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-progress"}},[e._v("#")]),e._v(" 2.4 Progress")]),e._v(" "),s("p",[e._v("It’s easy to construct a scenario in which two proposers each keep issuing\na sequence of proposals with increasing numbers, none of which are ever\nchosen. Proposer p completes phase 1 for a proposal number n1. Another\nproposer q then completes phase 1 for a proposal number n2 > n1. Proposer\np’s phase 2 accept requests for a proposal numbered n1 are ignored because\nthe acceptors have all promised not to accept any new proposal numbered\nless than n2. So, proposer p then begins and completes phase 1 for a new\nproposal number n3 > n2, causing the second phase 2 accept requests of\nproposer q to be ignored. And so on.\nTo guarantee progress, a distinguished proposer must be selected as the\nonly one to try issuing proposals. If the distinguished proposer can communicate successfully with a majority of acceptors, and if it uses a proposal\nwith number greater than any already used, then it will succeed in issuing a\nproposal that is accepted. By abandoning a proposal and trying again if it\nlearns about some request with a higher proposal number, the distinguished\nproposer will eventually choose a high enough proposal number.\nIf enough of the system (proposer, acceptors, and communication network) is working properly, liveness can therefore be achieved by electing a\nsingle distinguished proposer. The famous result of Fischer, Lynch, and Patterson [1] implies that a reliable algorithm for electing a proposer must use\neither randomness or real time—for example, by using timeouts. However,\nsafety is ensured regardless of the success or failure of the election.")]),e._v(" "),s("h3",{attrs:{id:"_2-5-the-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-the-implementation"}},[e._v("#")]),e._v(" 2.5 The Implementation")]),e._v(" "),s("p",[e._v("The Paxos algorithm [5] assumes a network of processes. In its consensus\nalgorithm, each process plays the role of proposer, acceptor, and learner.\nThe algorithm chooses a leader, which plays the roles of the distinguished\nproposer and the distinguished learner. The Paxos consensus algorithm is\nprecisely the one described above, where requests and responses are sent as\nordinary messages. (Response messages are tagged with the corresponding\nproposal number to prevent confusion.) Stable storage, preserved during\nfailures, is used to maintain the information that the acceptor must remember. An acceptor records its intended response in stable storage before\nactually sending the response.\nAll that remains is to describe the mechanism for guaranteeing that no\ntwo proposals are ever issued with the same number. Different proposers\nchoose their numbers from disjoint sets of numbers, so two different proposers never issue a proposal with the same number. Each proposer remembers (in stable storage) the highest-numbered proposal it has tried to issue,\nand begins phase 1 with a higher proposal number than any it has already\nused.")]),e._v(" "),s("h2",{attrs:{id:"_3-implementing-a-state-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-implementing-a-state-machine"}},[e._v("#")]),e._v(" 3 Implementing a State Machine")]),e._v(" "),s("p",[e._v("A simple way to implement a distributed system is as a collection of clients\nthat issue commands to a central server. The server can be described as\na deterministic state machine that performs client commands in some sequence. The state machine has a current state; it performs a step by taking\nas input a command and producing an output and a new state. For example, the clients of a distributed banking system might be tellers, and\nthe state-machine state might consist of the account balances of all users.\nA withdrawal would be performed by executing a state machine command\nthat decreases an account’s balance if and only if the balance is greater than\nthe amount withdrawn, producing as output the old and new balances.\nAn implementation that uses a single central server fails if that server\nfails. We therefore instead use a collection of servers, each one independently\nimplementing the state machine. Because the state machine is deterministic,\nall the servers will produce the same sequences of states and outputs if they\nall execute the same sequence of commands. A client issuing a command\ncan then use the output generated for it by any server.\nTo guarantee that all servers execute the same sequence of state machine\ncommands, we implement a sequence of separate instances of the Paxos\nconsensus algorithm, the value chosen by the i\nth instance being the i\nth state\nmachine command in the sequence. Each server plays all the roles (proposer,\nacceptor, and learner) in each instance of the algorithm. For now, I assume\nthat the set of servers is fixed, so all instances of the consensus algorithm\nuse the same sets of agents.\nIn normal operation, a single server is elected to be the leader, which\nacts as the distinguished proposer (the only one that tries to issue proposals)\nin all instances of the consensus algorithm. Clients send commands to the\nleader, who decides where in the sequence each command should appear.\nIf the leader decides that a certain client command should be the 135th\ncommand, it tries to have that command chosen as the value of the 135th\ninstance of the consensus algorithm. It will usually succeed. It might fail\nbecause of failures, or because another server also believes itself to be the\nleader and has a different idea of what the 135th command should be. But\nthe consensus algorithm ensures that at most one command can be chosen\nas the 135th one.\nKey to the efficiency of this approach is that, in the Paxos consensus\nalgorithm, the value to be proposed is not chosen until phase 2. Recall that,\nafter completing phase 1 of the proposer’s algorithm, either the value to be\nproposed is determined or else the proposer is free to propose any value.\nI will now describe how the Paxos state machine implementation works\nduring normal operation. Later, I will discuss what can go wrong. I consider\nwhat happens when the previous leader has just failed and a new leader has\nbeen selected. (System startup is a special case in which no commands have\nyet been proposed.)\nThe new leader, being a learner in all instances of the consensus algorithm, should know most of the commands that have already been chosen.\nSuppose it knows commands 1–134, 138, and 139—that is, the values chosen in instances 1–134, 138, and 139 of the consensus algorithm. (We will\nsee later how such a gap in the command sequence could arise.) It then\nexecutes phase 1 of instances 135–137 and of all instances greater than 139.\n(I describe below how this is done.) Suppose that the outcome of these executions determine the value to be proposed in instances 135 and 140, but\nleaves the proposed value unconstrained in all other instances. The leader\nthen executes phase 2 for instances 135 and 140, thereby choosing commands\n135 and 140.\nThe leader, as well as any other server that learns all the commands\nthe leader knows, can now execute commands 1–135. However, it can’t\nexecute commands 138–140, which it also knows, because commands 136\nand 137 have yet to be chosen. The leader could take the next two commands\nrequested by clients to be commands 136 and 137. Instead, we let it fill the\ngap immediately by proposing, as commands 136 and 137, a special “noop” command that leaves the state unchanged. (It does this by executing\nphase 2 of instances 136 and 137 of the consensus algorithm.) Once these\nno-op commands have been chosen, commands 138–140 can be executed.\nCommands 1–140 have now been chosen. The leader has also completed\nphase 1 for all instances greater than 140 of the consensus algorithm, and it\nis free to propose any value in phase 2 of those instances. It assigns command\nnumber 141 to the next command requested by a client, proposing it as the\nvalue in phase 2 of instance 141 of the consensus algorithm. It proposes the\nnext client command it receives as command 142, and so on.\nThe leader can propose command 142 before it learns that its proposed\ncommand 141 has been chosen. It’s possible for all the messages it sent\nin proposing command 141 to be lost, and for command 142 to be chosen\nbefore any other server has learned what the leader proposed as command\n141. When the leader fails to receive the expected response to its phase 2\nmessages in instance 141, it will retransmit those messages. If all goes well,\nits proposed command will be chosen. However, it could fail first, leaving a\ngap in the sequence of chosen commands. In general, suppose a leader can\nget α commands ahead—that is, it can propose commands i + 1 through\ni +α after commands 1 through i are chosen. A gap of up to α−1 commands\ncould then arise.\nA newly chosen leader executes phase 1 for infinitely many instances\nof the consensus algorithm—in the scenario above, for instances 135–137\nand all instances greater than 139. Using the same proposal number for\nall instances, it can do this by sending a single reasonably short message\nto the other servers. In phase 1, an acceptor responds with more than a\nsimple OK only if it has already received a phase 2 message from some\nproposer. (In the scenario, this was the case only for instances 135 and\n140.) Thus, a server (acting as acceptor) can respond for all instances with\na single reasonably short message. Executing these infinitely many instances\nof phase 1 therefore poses no problem.\nSince failure of the leader and election of a new one should be rare\nevents, the effective cost of executing a state machine command—that is, of\nachieving consensus on the command/value—is the cost of executing only\nphase 2 of the consensus algorithm. It can be shown that phase 2 of the\nPaxos consensus algorithm has the minimum possible cost of any algorithm\nfor reaching agreement in the presence of faults [2]. Hence, the Paxos algorithm is essentially optimal.\nThis discussion of the normal operation of the system assumes that there\nis always a single leader, except for a brief period between the failure of the\ncurrent leader and the election of a new one. In abnormal circumstances,\nthe leader election might fail. If no server is acting as leader, then no new\ncommands will be proposed. If multiple servers think they are leaders, then\nthey can all propose values in the same instance of the consensus algorithm, which could prevent any value from being chosen. However, safety is\npreserved—two different servers will never disagree on the value chosen as\nthe i\nth state machine command. Election of a single leader is needed only\nto ensure progress.\nIf the set of servers can change, then there must be some way of determining what servers implement what instances of the consensus algorithm.\nThe easiest way to do this is through the state machine itself. The current\nset of servers can be made part of the state and can be changed with ordinary state-machine commands. We can allow a leader to get α commands\nahead by letting the set of servers that execute instance i + α of the consensus algorithm be specified by the state after execution of the i\nth state\nmachine command. This permits a simple implementation of an arbitrarily\nsophisticated reconfiguration algorithm.")]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("p",[e._v("[1] Michael J. Fischer, Nancy Lynch, and Michael S. Paterson. Impossibility\nof distributed consensus with one faulty process. Journal of the ACM,\n32(2):374–382, April 1985.")]),e._v(" "),s("p",[e._v("[2] Idit Keidar and Sergio Rajsbaum. On the cost of fault-tolerant consensus\nwhen there are no faults—a tutorial. TechnicalReport MIT-LCS-TR-821,\nLaboratory for Computer Science, Massachusetts Institute Technology,\nCambridge, MA, 02139, May 2001. also published in SIGACT News\n32(2) (June 2001).")]),e._v(" "),s("p",[e._v("[3] Leslie Lamport. The implementation of reliable distributed multiprocess\nsystems. Computer Networks, 2:95–114, 1978.")]),e._v(" "),s("p",[e._v("[4] Leslie Lamport. Time, clocks, and the ordering of events in a distributed\nsystem. Communications of the ACM, 21(7):558–565, July 1978.")]),e._v(" "),s("p",[e._v("[5] Leslie Lamport. The part-time parliament. ACM Transactions on Computer Systems, 16(2):133–169, May 1998.")])])}),[],!1,null,null,null);a.default=t.exports}}]);