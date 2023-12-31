import { Group, Paper, Stack, Text } from "@mantine/core"
import { ExampleMenu } from "~components/ButtonsWithPortal/ExampleMenu"
import { ExampleModal } from "~components/ButtonsWithPortal/ExampleModal"
import { ExampleTooltip } from "~components/ButtonsWithPortal/ExampleTooltip"

export const ButtonsWithPortal = () => {
    return (
        <Paper withBorder radius="md" p="xl" shadow="xl">
            <Stack>
                <Text fw={700}>
                    Buttons with portal
                </Text>
                <Group>
                    <ExampleMenu />
                    <ExampleModal />
                    <ExampleTooltip />
                </Group>
            </Stack>


        </Paper>)
}

