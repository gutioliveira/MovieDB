import styled from 'styled-components/native'
import React from 'react';

export const Container = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.2);
    align-items: center;
    justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs(props => ({
    size: "large",
    color: "#0000ff"
}))`
`;

export const Modal = styled.Modal`
`;
