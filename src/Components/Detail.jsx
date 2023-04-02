import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import { BodyPart, Equipment, Target } from "../Assets/Index"

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const ExtraDetail = [
        {
            no: 0,
            icon: BodyPart,
            name: bodyPart,
        },
        {
            no: 1,
            icon: Target,
            name: target,
        },
        {
            no: 2,
            icon: Equipment,
            name: equipment,
        },
    ];

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '54px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} color="#4F4C4C">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {ExtraDetail?.map((item, index) => (
                    <Stack key={item.no = index} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: 'whitesmoke', borderRadius: '50%', width: '80px', height: '80px' }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '40px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '20px', xs: '16px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;