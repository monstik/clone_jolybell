import { Box, Button, Fade, Typography, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CaringThingDialog from '../components/Dialogs/CaringThingDialog';
import BasketButton from '../components/Product/BasketButton/BasketButton';
import Count from '../components/Product/Count/Count';
import ProductSwiper from '../components/Product/ProductSwiper/ProductSwiper';
import Recomendations from '../components/Product/Recomendations/Recomendations';
import Sizes from '../components/Product/Sizes/Sizes';
import { changeMenuColor } from '../features/menu/menuSlice';
import { selectProductIsDark } from '../features/product/productSlice';

const sizes = [
	{ id: 0, size: 's' },
	{ id: 1, size: 'm' },
	{ id: 2, size: 'l' },
	{ id: 3, size: 'xl' },
	{ id: 4, size: '2xl' },
	{ id: 5, size: '3xl' }
];

const ProductPage = () => {
	const mobile = useMediaQuery('(max-width: 480px)');

	const dispatch = useAppDispatch();

	const isDark = useAppSelector(selectProductIsDark);

	const [caringDialogOpen, setCaringDialogOpen] = useState(false);

	const CaringDialogHandleOpen = () => {
		setCaringDialogOpen(true);
	};

	const CaringDialogHandleClose = () => {
		setCaringDialogOpen(false);
	};

	useEffect(() => {
		dispatch(changeMenuColor('#111113'));
		const timer = setTimeout(() => {
			if (!isDark) dispatch(changeMenuColor('transparent'));
		}, 2000);
		return () => clearTimeout(timer);
	}, [dispatch, isDark]);

	return (
		<Box
			sx={{
				height: '2500px',
				backgroundColor: isDark ? '#111113' : '#ebe6e8',
				position: 'relative',
				zIndex: 1,
				padding: {
					xs: '35px 0 155px 0',
					md: '50px 0 155px 0'
				},
				transition: ' background 2s ease,  ',
				animation: '2s cubic-bezier(0.4, 0, 0.2, 1) name-of-animation',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				'@keyframes name-of-animation': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<Typography
					component={'h1'}
					sx={{
						fontSize: mobile ? '7.9vw' : '34px',
						color: isDark ? '#fff' : '#000'
					}}
				>
					Ультра Черная Футбола
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<Box
					sx={{
						maxWidth: '1500px',
						width: '90vw',
						display: 'flex',
						flexDirection: {
							md: 'row',
							// sm: 'column',
							xs: 'column'
						},
						alignItems: {
							md: 'flex-start',
							xs: 'center'
						},
						margin: {
							md: '75px 0 0 0',
							xs: '40px 0 0 0'
						}

					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							flex: '1 1',
							position: 'relative'
						}}
					>
						<Box
							sx={{
								position: 'relative',
								width: { md: '45vw', xs: '90vw' },
								maxWidth: '765px'
							}}
						>
							<Box
								sx={{
									position: 'absolute',
									width: '100%',
									height: '100%',
									top: { lg: '35%', md: '60%', sm: '45%', xs: '60%' },
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									version='1.1'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									viewBox='0 0 800 800'
									opacity='0.5'
								>
									<defs>
										<filter
											id='bbblurry-filter'
											x='-100%'
											y='-100%'
											width='400%'
											height='400%'
											filterUnits='objectBoundingBox'
											primitiveUnits='userSpaceOnUse'
											colorInterpolationFilters='sRGB'
										>
											<feGaussianBlur
												stdDeviation='100'
												x='0%'
												y='0%'
												width='100%'
												height='100%'
												in='SourceGraphic'
												edgeMode='none'
												result='blur'
											></feGaussianBlur>
										</filter>
									</defs>
									<g filter='url(#bbblurry-filter)'>
										<ellipse
											rx='148.5'
											ry='148.5'
											cx='398.04462948145044'
											cy='363.94366710722755'
											fill='hsla(38, 35%, 98%, 1)'
										></ellipse>
									</g>
								</svg>
							</Box>
							<Box sx={{ maxHeight: '540px', width: '100%', height: '100%' }}>
								<ProductSwiper color={isDark ? '#fff' : '#000'} />
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							width: { md: '43.5%', xs: '100%' },
							marginLeft: { md: '5.5%', xs: '0' },
							minWidth: {
								md: '435px'
							},
							position: 'relative',

							display: 'flex',
							flexDirection: 'column',
							alignItems: { xs: 'center', md: 'flex-start' },
							marginTop: { xs: '25px', md: '0' },
							zIndex: 1
						}}
					>
						<Box
							sx={{
								fontSize: mobile ? '5.7142857143vw' : '24px',
								height: '2em',
								display: 'flex',
								alignItems: 'center',
								width: 'max-content',
								padding: '0 24px',
								flexWrap: 'nowrap',
								borderRadius: '100px',
								bgcolor: isDark ? '#fff' : '#000',
								color: isDark ? '#111113' : '#fff',
								marginBottom: { xs: '50px', sm: '0' }
							}}
						>
							<Typography
								component={NumberFormat}
								thousandSeparator={' '}
								displayType='text'
								value={1950}
								fontSize={'inherit'}
								fontWeight={600}
								sx={{
									flexWrap: 'nowrap'
								}}
							/>
							<Typography fontSize={'inherit'} fontWeight={600}>
								&nbsp;UAH
							</Typography>
						</Box>
						<Box
							sx={{
								marginTop: '20px',

								letterSpacing: '.07em',
								display: 'flex',
								flexDirection: 'column',
								alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
								textAlign: { xs: 'center', sm: 'center', md: 'start' }
							}}
						>
							<Typography
								component={'p'}
								fontSize={15}
								fontWeight={300}
								sx={{
									margin: '0px 0px 20px',
									color: isDark ? '#fff' : '#000',
									lineHeight: '1.8',
									letterSpacing: '.07em'
								}}
							>
								Тонкая. Легкая. Ультра черная.
							</Typography>
							<Typography
								component={'p'}
								fontSize={15}
								fontWeight={300}
								sx={{
									margin: '0px 0px 20px',
									color: isDark ? '#fff' : '#000',
									lineHeight: '1.8',
									letterSpacing: '.07em'
								}}
							>
								Лимитированная версия футболки B.O.M.J - первая единица контрбрендовой
								линии одежды. Потрясающие качество в совместительстве с уточненным
								подходом к деталям, которым не могут похвастаться именитые раздутые
								фирмы.
							</Typography>
							<Typography
								component={'p'}
								fontSize={15}
								fontWeight={300}
								sx={{
									margin: '0px 0px 20px',
									color: isDark ? '#fff' : '#000',
									lineHeight: '1.65',
									letterSpacing: '.07em'
								}}
							>
								Ткань сорта пенье
							</Typography>

							<Typography
								component={'p'}
								fontSize={15}
								fontWeight={300}
								sx={{
									margin: '0px 0px 20px',
									color: isDark ? '#fff' : '#000',
									lineHeight: '1.8',
									letterSpacing: '.07em'
								}}
							>
								Состав: 95% cotton, 5% spandex. Плотность 170 г/м²
							</Typography>
							<Typography
								component={'p'}
								fontSize={15}
								fontWeight={300}
								sx={{
									margin: '0px 0px 20px',
									color: isDark ? '#fff' : '#000',

									letterSpacing: '.07em',
									lineHeight: '1.8'
								}}
							>
								В комплекте идут стикеры Игра в Кальмара
							</Typography>
							<Typography
								component={'p'}
								fontSize={15}
								fontWeight={300}
								sx={{
									margin: '0px 0px 20px',
									color: isDark ? '#fff' : '#000',
									lineHeight: '1.8',
									letterSpacing: '.07em'
								}}
							>
								*Колличество ограничено
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								columnGap: '19px',
								marginTop: '9px',
								flexDirection: mobile ? 'column' : 'row',
								rowGap: mobile ? '19px' : '0'
							}}
						>
							<Button
								variant='outlined'
								sx={{
									borderRadius: '100px',
									height: '46px',
									padding: '0 30px',
									color: isDark ? '#636573' : '#808392',
									border: isDark ? '2px solid #474852' : '2px solid #9c9eaf',

									'&:hover': {
										border: isDark ? '2px solid #717283' : '2px solid #9798a5',
										color: isDark ? '#9697a1' : '#616472',
										bgcolor: 'transparent'
									}
								}}
							>
								<Typography
									component={'span'}
									sx={{
										fontSize: '12px',
										fontWeight: '500',
										letterSpacing: '1.8px'
									}}
								>
									размерная сетка
								</Typography>
							</Button>
							<Button
								variant='outlined'
								onClick={CaringDialogHandleOpen}
								sx={{
									borderRadius: '100px',
									height: '46px',
									padding: '0 30px',
									color: isDark ? '#636573' : '#808392',
									border: isDark ? '2px solid #474852' : '2px solid #9c9eaf',

									'&:hover': {
										border: isDark ? '2px solid #717283' : '2px solid #9798a5',
										color: isDark ? '#9697a1' : '#616472',
										bgcolor: 'transparent'
									}
								}}
							>

								<Typography
									component={'span'}
									sx={{
										fontSize: '12px',
										fontWeight: '500',
										letterSpacing: '1.8px'
									}}
								>
									уход за вещью
								</Typography>
							</Button> <CaringThingDialog
							open={caringDialogOpen}
							onClose={CaringDialogHandleClose}
						/>
						</Box>
						<Box
							sx={{
								marginTop: '30px'
							}}
						>
							<Typography
								sx={{
									fontSize: '13px',
									fontWeight: '500',
									letterSpacing: '1.8px',
									color: isDark ? '#636573' : '#808392',
									marginBottom: '10px',
									textAlign: { md: 'start', xs: 'center' }
								}}
							>
								Выберите размер:
							</Typography>
							<Sizes sizes={sizes} isDark={isDark} />
						</Box>
						<Box
							sx={{
								marginTop: '30px'
							}}
						>
							<Typography
								sx={{
									fontSize: '13px',
									fontWeight: '500',
									letterSpacing: '1.8px',
									color: isDark ? '#636573' : '#808392',
									marginBottom: '10px',

									textAlign: { md: 'start', xs: 'center' }
								}}
							>
								Количество:
							</Typography>
							<Box
								sx={{
									display: 'flex',
									columnGap: '20px',
									flexDirection: {
										md: 'row',
										xs: 'column'
									},

									alignItems: {
										md: 'flex-start',
										xs: 'center'
									},

									rowGap: {
										md: '0',
										xs: '25px'
									}
								}}
							>
								<Count isDark={isDark} />
								<BasketButton isDark={isDark} />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					marginTop: '100px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '90vw'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						columnGap: '10px'
					}}
				>
					<Typography
						component={'p'}
						sx={{
							color: isDark ? '#fff' : '#000',
							fontSize: mobile ? '5.5vw' : '26px',
							textTransform: 'uppercase',
							fontWeight: 600
						}}
					>
						рекомендуем к
					</Typography>
					<Typography
						sx={{
							color: isDark ? '#000' : '#fff',
							fontSize: mobile ? '5.5vw' : '25px',
							textTransform: 'uppercase',
							fontWeight: 600,
							bgcolor: isDark ? '#fff' : '#000',
							padding: '6px 18px',
							width: 'max-content'
						}}
					>
						покупке
					</Typography>
				</Box>
				<Box
					sx={{
						maxHeight: '540px',
						width: {
							xl: '1300px',
							lg: '1054px',
							md: '808px',
							sm: '562px',
							xs: '316px'
						},

						// maxWidth: '765px',
						marginTop: {
							md: '70px',
							xs: '30px'
						},

						height: '100%'
					}}
				>
					<Recomendations isDark={isDark} />
				</Box>
			</Box>
			{/* <ProductSwiper color='#fff' /> */}
		</Box>
	);
};

export default ProductPage;
