import styleText from "data-text:@radix-ui/themes/styles.css"
import { Button, Theme } from '@radix-ui/themes';
import { BookmarkIcon } from '@radix-ui/react-icons';
import type { PlasmoGetStyle } from "plasmo"


export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style")
    style.textContent = styleText.replaceAll(':root', ':host(plasmo-csui)'); 
    return style
}

const CustomButton = () => {
    return (<Theme isRoot={false}>
        <Button  variant="classic">
            <BookmarkIcon /> Hello World
        </Button>
    </Theme>)
}

export default CustomButton