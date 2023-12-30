import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { Task1 } from '../wrappers/Task1';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('Task1', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Task1');
    });

    let blockchain: Blockchain;
    let task1: SandboxContract<Task1>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        task1 = blockchain.openContract(Task1.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await task1.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: task1.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and task1 are ready to use
    });

    it('call input', async () => {                              // description of the test case
        const res = await main.sendMessage(sender. , toNano('0.05'));  // performing an action with contract main and saving result in res

        expect(res.transactions).toHaveTransaction({                             // configure the expected result with expect() function
            from: main.address,                                                  // set expected sender for transaction we want to test matcher properties from
            success: true                                                        // set the desirable result using matcher property success
        });

        printTransactionFees(res.transactions);                                  // print table with details on spent fees
    });
});
