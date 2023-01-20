import styled from '@emotion/styled';

export const Button = styled.button`
    margin-top: 16px;
    margin-right: 8px;
    padding: 8px 16px;
    border: 0;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        background-color: #1976d2;
        color: #fff;
    }
`;
