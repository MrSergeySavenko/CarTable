import styled from '@emotion/styled';

export const SMainWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1280px',
    margin: '0 auto',
}));

export const SCarsTableItem = styled('div')(() => ({
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '24px',
    marginBottom: '16px',
    padding: '8px 16px',
    border: '1px solid #000',
    flexWrap: 'wrap',
    alignItems: 'center',
}));

export const SCarsChars = styled('input')(() => ({
    border: 'none',
    backgroundColor: '#fff',

    '&::-webkit-input-placeholder': {
        color: '#000',
    },
}));

export const SCrossImg = styled('button')(() => ({
    padding: '4px',
    borderColor: '#000',
    cursor: 'pointer',
}));
