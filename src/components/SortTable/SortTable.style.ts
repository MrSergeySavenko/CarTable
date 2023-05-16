import styled from '@emotion/styled';

export const SSortWrapper = styled('div')(() => ({
    width: '600px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '24px',
}));

export const SSortItemWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginRight: '16px',
    alignItems: 'center',
}));

export const SSortText = styled('p')(() => ({
    color: '#000',
    marginRight: '4px',
    display: 'inline-block',
    width: '135px',
}));
