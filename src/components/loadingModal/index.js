import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Spinner, Modal } from './styles';

export default function LoadingModal(){

    const loading = useSelector(state => state.loading);

    return(
        <Modal
            onRequestClose={() => {}}
            transparent={true}
            visible={loading}>

            <Container>
                <Spinner/>
            </Container>

        </Modal>
    )
}
