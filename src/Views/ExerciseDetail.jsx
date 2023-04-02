import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Detail, ExerciseVideos, SimilarExercises } from "../Components/Index"
import { ExerciseOptions, FetchData, YoutubeOptions } from '../Utilities/Index';
import MainLayout from '../Layout/Main.Layout'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: 'smooth' });

        const fetchExercisesData = async () => {
            const ExerciseDetailData = await FetchData(`${import.meta.env.VITE_EXERCISEDB_URL}/exercises/exercise/${id}`, ExerciseOptions);
            setExerciseDetail(ExerciseDetailData);

            const ExerciseVideosData = await FetchData(`${import.meta.env.VITE_YOUTUBE_SEARCH_AND_DOWNLOAD_URL}/search?query=${ExerciseDetailData.name} exercise`, YoutubeOptions);
            setExerciseVideos(ExerciseVideosData.contents);

            const TargetMuscleExercisesData = await FetchData(`${import.meta.env.VITE_EXERCISEDB_URL}/exercises/target/${ExerciseDetailData.target}`, ExerciseOptions);
            setTargetMuscleExercises(TargetMuscleExercisesData);

            const EquimentExercisesData = await FetchData(`${import.meta.env.VITE_EXERCISEDB_URL}/exercises/equipment/${ExerciseDetailData.equipment}`, ExerciseOptions);
            setEquipmentExercises(EquimentExercisesData);
        };

        fetchExercisesData();
    }, [id]);

    if (!exerciseDetail) return <div>No Data</div>;

    return (
        <MainLayout>
            <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
                <Detail exerciseDetail={exerciseDetail} />
                <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
                <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
            </Box>
        </MainLayout>
    );
};

export default ExerciseDetail