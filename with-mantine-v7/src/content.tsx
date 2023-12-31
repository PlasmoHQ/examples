import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo";

import '@mantine/core/styles.css';
import mantineCssText from "data-text:@mantine/core/styles.css"

//see https://github.com/PlasmoHQ/plasmo/issues/776#issuecomment-1811072653
import "~styles/mantineOverride.css"
import mantineOverrideCssText from "data-text:~styles/mantineOverride.css"

import { setMantineColorScheme } from "~utils/utils";
import { AppProvider } from "~providers/AppProvider";

import { ExampleMenu } from "~components/ButtonsWithPortal/ExampleMenu"
import { ExampleModal } from "~components/ButtonsWithPortal/ExampleModal";
import { ExampleTooltip } from "~components/ButtonsWithPortal/ExampleTooltip";

import { Box, Group, Paper, Stack, Text } from "@mantine/core"
import { ActionsGrid } from "~components/ActionsGrid/ActionsGrid";
import { ButtonsWithPortal } from "~components/ButtonsWithPortal/ButtonsWithPortal";

/* -------------------------------------------------------------------------- */
/*                                   Plasmo                                   */
/* -------------------------------------------------------------------------- */

export const config: PlasmoCSConfig = {
    matches: ["https://www.plasmo.com/*", "https://example.com/*"],
};

export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style");
    style.textContent = mantineCssText + mantineOverrideCssText
    return style;
};

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */


//Note: Use plasmoShadowContainer as portalProps in all components that use portal (e.g. Menu, Tooltip)
const App = () => {
    return (
        <>
            <div style={{ position: "fixed", right: 50, bottom: 50 }}>
                <ActionsGrid />
            </div>

            <div style={{ position: "fixed", right: 50, top: 50 }}>
                <ButtonsWithPortal />
            </div>
        </>
    )
}

/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */

const PlasmoContent = () => {
    //Note: If you do not do this, the portal components will not get the theme
    //Perhaps someone can do this at custom plasmo rootcontainer render
    setMantineColorScheme("light")
    return (
        <AppProvider>
            <App />
        </AppProvider>
    );
};

export default PlasmoContent;
