import { Summary } from '../Summary';
import { TransactionsTable } from '../transactionsTable';

import { Container } from './style';

export function Dashbord() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
};