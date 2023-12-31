import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { getPlasmoShadowContainer } from '~utils/utils';

export function ExampleModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Modal" withinPortal portalProps={{ target: getPlasmoShadowContainer() }}>
                {/* Modal content */}
            </Modal>

            <Button variant="light" onClick={open}>Open modal</Button>
        </>
    );
}