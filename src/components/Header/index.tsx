import Modal from 'react-modal'
import logoImg from '../../assets/Logo.svg'

import { Container, Content } from './style'

Modal.setAppElement ('#root')

interface headerProps {
    onOpenNewTransectionModal: () => void; 
}

export function Header({ onOpenNewTransectionModal}: headerProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransectionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}