import { Box, Grid, Typography, useMediaQuery, Fade } from '@mui/material';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';

import ProductItem from '../components/Product/ProductItem/ProductItem';
import { changeMenuColor } from '../features/menu/menuSlice';
import MainLayout from '../layouts/MainLayout';

const CategoryPage: React.FC = () => {
	const params = useParams();
	const mobile = useMediaQuery('(max-width: 480px)');
	const [activeParam, setActiveParam] = useState(false);
	const [categoryName, setCategoryName] = useState('');
	const dispatch = useAppDispatch();

	useEffect(() => {
		setActiveParam(false);
		dispatch(changeMenuColor('#000'));
		const timer = setTimeout(() => {
			setActiveParam(true);
			if (params.categoryId) setCategoryName(params.categoryId);
		}, 500);
		return () => clearTimeout(timer);
	}, [dispatch, params.categoryId]);

	return (
		// <MainLayout>
		<Fade timeout={500} in={activeParam}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: '#fff',
					padding: '55px 0 155px 0'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center'
						// paddingTop: { xs: '35px', md: '35px', lg: '50px' },
					}}
				>
					<Typography
						component={'h1'}
						sx={{
							textTransform: 'capitalize'
						}}
						fontSize={34}
						fontWeight={500}
					>
						{categoryName}
					</Typography>
				</Box>

				<Box
					sx={{
						width: mobile
							? '90vw'
							: {
								xs: '430px',
								sm: '87.5vw',
								md: '895px',
								lg: '85vw',
								xl: '1366px'
							}
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							margin: '-35px -17.5px',
							paddingTop: { xl: '75px', md: '40px', xs: '40px' }
						}}
					>
						<ProductItem dark={true} />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</Box>
				</Box>
			</Box>
		</Fade>
		// </MainLayout>
	);
};

export default CategoryPage;
