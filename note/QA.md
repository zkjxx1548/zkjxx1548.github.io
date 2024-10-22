1. Most difficult/complex part of your project, way to handle?
   > In my opinion, with the correct use of frameworks and technologies, day-to-day development is less likely to encounter difficult technical problems. Sometimes the project must use some third-party libraries, when some of their functionality is not implemented, this problem is difficult to resolve.To solve this problem, we can first sort out the documentation to ensure that the functions required by the business are not supported by the third-party library. Seek the support of the corresponding team firstly and see if they can come up with a solution. Asking the original technical team is a good practice when using third-party libraries. During the time, we can read the source code and try to solve the problem ourselves.
2. Any frontend web application experiences? e.g. Angular, React.
   > yes, i have some experiences on react. A background application with lots of forms, lots of field validation, and lots of interaction. Mainly uses react-hook-form to manage forms, create, add, delete, verify, submit, and backfill.
3. How to maintain external integrations, and challenges, e.g. service behavior changes
   > I do not have some experience on BE service management. As a FE, Use contract tests to verify service stability before an external integrator releases a new version. Verify the functionality of the new version in a low environment. Do a good job of exception handling, when the external service behavior does not meet expectations, reasonably throw exceptions to ensure that our service does not cause loss.
4. How to maintain multiple service versions?
   > Use a step-by-step deployment strategy, such as Canary deployment. it can run multiple versions of the service in the same time in a production environment. This helps reduce risk when new versions are launched. or using feature toggle. control version of API. Encourage consumers to upgrade to new versions as soon as possible. Maintain service documentation.
5. How to use contract testing?
   > Contract Testing is a software testing method used to ensure that two independent systems, such as two microservices, are compatible and communicate with each other. Firstly, define the contract, write the test cases, execute tests, verify and maintain. In general, contract testing is a complementary testing approach that can be combined with unit testing, integration testing, and end-to-end testing to provide comprehensive test coverage.
6. TDD, Pairing -> what, how and challenges.
   > TDD is a software development approach that emphasizes writing Test cases first, writing functional code that allows the tests to pass, and finally refactoring to improve the quality of the code. There are 3 steps: write a test, write as little code as possible, refactor the code, repeat the above three steps, After multiple feature points have been done, we need to integrate all the feature together and write integration tests. Of course, TDD has some challenges, it needs more time to code and some scenarios are not suitable. TDD mainly concerns unit tests, so it needs other kind of tests.
   > Paring is a collaborative technique in the agile software development methodology in which two developers work together on a single workstation. Two roles, one is driver who writes the code, the other one is Navigator who reviews code, provides feedback, thing about the overall architecture and design. Of course, pair has some challenges, it needs more cost, because two developers work on the same task on the same time. and disagreements are inevitable, team need to build a culture that team member can openly discuss different point of view and find the best solution together.
7. How to fast empower your peers to learn and do TDD/Pair?
   > Patience and participation. As a driver or Navigator, pair with peers, step by step. During the pair or TDD, Good communication is the key to cooperation.
8. TDD starts from a unit test or integration test?
   > TDD starts from a unit test. The whole process is write a test, write as little code as possible, refactor the code. repeat the cycle. And as for TDD, TDD mainly concerns unit tests, Integration testing is exactly what it lacks.
9. How to TDD for frontend, e.g. domain logic, CSS view?
   > we can identify the smallest unit of functionality for domain logic. For CSS, we can write visual regression tests, use screenshots to verify.
10. How comfortable with coaching less experienced members?
    > Clear explanation, provide enough patience, give enough time, encouragement and motivation are useful, the last one, tell method not only result.
11. How to fast learn new domain knowledge when joining a new project?
    > Firstly, we need to know the project goals. Then we need to pay the attention project document. The last, we need to pay more attention on asking team member. Information sharing is greater than documentation.
12. Do you know about clean architecture ? Any project experience? Any thoughts about it?
    > the main goal is to create system that are easy to maintain, scalable and testable. here are some points about it. one, Separate concerns, making different part focus on different issues. Dependency inversion, making High level module not depend on low level module.
13. Do you have DDD experience, how would it be?
    > DDD (Domain-driven Design) is a software design methodology, which emphasizes the business Domain as the center of software development.
14. How to plan release for a new system?
    > check if complete and test all the feature
    > check if any bugs are not fixed
    > check if environment and external services are ready
    > check if documents are ready
    > check if rollback plan is ready
