import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';

import '@testing-library/jest-dom';

import Line from './index.tsx';

const data = {
    publicId: '111',
    name: 'John',
    cnpj: '2312',
    phoneNumber: '1012',
    ownerName: 'Marcos',
};

test('<Line need to show "editar" />', () => {
    const line = render(
        <StaticRouter location={''}>
            <Line data={data} showEdit />
        </StaticRouter>,
    );

    const edit = line.getByText('Editar');
    expect(edit).toBeDefined();

    line.unmount();
});

test('<Line need to not show "editar" />', () => {
    const line = render(
        <StaticRouter location={''}>
            <Line data={data} />
        </StaticRouter>,
    );

    expect(screen.getByTestId('line')).not.toHaveTextContent('Editar');

    line.unmount();
});
