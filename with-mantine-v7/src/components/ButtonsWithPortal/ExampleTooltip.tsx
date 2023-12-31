import { Tooltip, Button } from '@mantine/core';
import { getPlasmoShadowContainer } from '~utils/utils';

export function ExampleTooltip() {
    return (
        <Tooltip label="Tooltip" withinPortal portalProps={{ target: getPlasmoShadowContainer() }}>
            <Button variant="outline">Button with tooltip</Button>
        </Tooltip>
    );
}