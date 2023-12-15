import { Box } from "@mui/material"

const ListFromText = ({ children, centered }: { children: string, centered?: boolean }) => {
    const listItems = children.split('q-').slice(1).map((item, index) => <li key={index}>{item.trim()}</li>)

    const needToCenter = !listItems.length && centered
    return (
        <Box textAlign={needToCenter ? 'center' : 'left'}>
            {listItems.length ?
                <ul>
                    {listItems}
                </ul>
                : children
            }
        </Box>
    )
}

export default ListFromText