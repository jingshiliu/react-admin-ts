import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import {mockBarData} from "@/data/mockData";

const Bar = () => {
    return (
        <Box component={'section'} className="p-4 flex flex-col h-full">
            <Header title='Bar Chart' description="Simple Bar Chart"/>
            <Box className="h-full">
                <BarChart data={mockBarData}/>
            </Box>

        </Box>
    );
}

export default Bar;