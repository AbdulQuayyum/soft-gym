import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import { BodyPart, ExerciseCard } from "./Index"
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';

const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="right-arrow">
            < WestRoundedIcon fontSize='large' />
        </Typography>
    );
};

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Typography disabled={isLastItemVisible} onClick={() => scrollNext()} className="left-arrow">
            < EastRoundedIcon fontSize='large' />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {bodyParts ?
                    <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                    : <ExerciseCard exercise={item} />}
            </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar