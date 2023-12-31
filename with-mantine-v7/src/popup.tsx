import { useState } from "react";
import { Anchor, Button, Input, Paper, Stack, Text } from "@mantine/core";
import { AppProvider } from "~providers/AppProvider";

import '@mantine/core/styles.css';

function PlasmoPopup() {
	const [data, setData] = useState("");
	return (
		<AppProvider>
			<Paper>
				<Stack miw={240} p="lg">
					<Text fw="bold" size="xl">
						Welcome to your{" "}
						<Anchor href="https://www.plasmo.com" target="_blank">
							{data}
						</Anchor>{" "}
						Extension!
					</Text>
					<Input onChange={(e) => setData(e.target.value)} value={data} />
					<Button component="a" href="https://docs.plasmo.com" target="_blank">
						View Docs
					</Button>
				</Stack>
			</Paper>
		</AppProvider>
	);
}

export default PlasmoPopup;
