import { Box } from "@mui/material"

const ListFromText = ({ children }: { children: string }) => {
    const listItems = children.split('q-').slice(1).map((item, index) => <li key={index}>{item.trim()}</li>)
    return (
        <Box data-aos='fade-up'>
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