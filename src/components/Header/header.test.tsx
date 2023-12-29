import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';

import Header from './index.tsx';

test('<Header />', () => {
    const header = render(
        <StaticRouter location={''}>
            <Header />
        </StaticRouter>,
    );

    const theme = header.getByText('light mode');
    expect(theme).toBeDefined();

    header.unmount();
});
