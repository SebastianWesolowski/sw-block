
import { styles } from './styled-bicycle-import';

export const save = () => {
	const svgArrow = <svg
		xmlns="http://www.w3.org/2000/svg"
		xlink="http://www.w3.org/1999/xlink"
		width="77px" height="28px">
		<path fillRule="evenodd" fill="rgb(152, 156, 164)"
			d="M65.775,0.958 C65.824,0.870 65.824,0.870 65.775,0.958 C65.824,0.870 65.824,0.870 65.775,0.958 C65.873,0.782 66.058,0.655 66.106,0.567 C65.970,0.607 65.873,0.782 65.775,0.958 C65.890,2.399 67.162,4.023 67.957,5.268 C68.791,6.650 69.713,8.080 70.596,9.374 C72.488,12.146 74.604,14.928 76.729,17.485 C76.817,17.534 74.371,22.145 74.147,22.136 C67.634,22.536 61.033,22.888 54.519,23.289 C54.743,23.298 55.689,21.183 55.835,20.920 C55.981,20.657 56.878,18.630 57.150,18.551 C59.755,18.391 62.312,18.318 64.830,18.110 C62.197,16.877 59.555,15.869 56.814,15.036 C47.447,12.130 37.260,11.525 27.557,13.139 C17.941,14.801 6.349,18.580 0.768,27.189 C1.440,26.185 2.385,24.070 3.252,22.715 C6.525,17.645 11.729,14.451 17.205,12.212 C33.360,5.571 52.101,6.221 67.849,13.702 C67.092,12.593 66.297,11.348 65.589,10.152 C64.755,8.770 63.046,6.903 63.476,5.305 C63.427,5.393 63.378,5.481 63.291,5.432 C63.388,5.257 63.437,5.169 63.534,4.993 C63.534,4.993 63.534,4.993 63.583,4.906 C63.993,3.756 64.831,2.040 65.775,0.958 ZM65.337,1.747 C65.434,1.572 65.581,1.308 65.678,1.133 C65.493,1.260 65.347,1.523 65.337,1.747 Z" />
	</svg>;
	const svgPin = <svg
		xmlns="http://www.w3.org/2000/svg"
		xlink="http://www.w3.org/1999/xlink"
		width="16px" height="22px">
		<path fillRule="evenodd" fill="rgb(255, 0, 0)"
			d="M8.595,21.135 C8.444,21.304 8.227,21.400 8.000,21.400 C7.773,21.400 7.556,21.304 7.404,21.135 C6.647,20.290 -0.000,12.763 -0.000,8.600 C-0.000,4.189 3.589,0.600 8.000,0.600 C12.411,0.600 16.000,4.189 16.000,8.600 C16.000,12.763 9.353,20.290 8.595,21.135 ZM8.000,2.200 C4.471,2.200 1.600,5.071 1.600,8.600 C1.600,11.340 5.781,16.792 8.000,19.385 C10.219,16.791 14.400,11.338 14.400,8.600 C14.400,5.071 11.529,2.200 8.000,2.200 ZM8.000,12.600 C5.794,12.600 4.000,10.805 4.000,8.600 C4.000,6.395 5.794,4.600 8.000,4.600 C10.206,4.600 12.000,6.395 12.000,8.600 C12.000,10.805 10.206,12.600 8.000,12.600 ZM8.000,6.200 C6.676,6.200 5.600,7.276 5.600,8.600 C5.600,9.924 6.676,11.000 8.000,11.000 C9.324,11.000 10.400,9.924 10.400,8.600 C10.400,7.276 9.324,6.200 8.000,6.200 Z" />
	</svg>;

	return (
		<div>
			<div className={ styles[ 'bicycle-import' ] }>
				<div className={ styles[ 'bicycle-import__wrapper' ] }>
					<div className={ styles[ 'bicycle-import__title' ] }>
						Procedura zakupu motocykla z USA
					</div>
					<div className={ styles[ 'bicycle-import__container' ] }>
						<div className={ styles[ 'bicycle-block' ] }>
							<div className={ styles[ 'bicycle-block__title' ] }>
								Wyszukaj pojazd<br />
								na portalach aukcyjnych
							</div>
							<div className={ styles[ 'bicycle-block__img' ] }>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xlink="http://www.w3.org/1999/xlink"
									width="86px" height="86px">
									<path fillRule="evenodd" fill="rgb(255, 0, 0)"
										d="M56.046,-0.004 C72.566,-0.004 86.000,13.427 86.000,29.943 C86.000,46.458 72.566,59.889 56.046,59.889 C48.498,59.889 41.600,57.086 36.327,52.465 L33.176,55.585 L34.611,57.020 C35.360,57.760 35.360,59.118 34.611,59.858 L9.213,85.251 C8.473,85.999 7.114,85.999 6.374,85.251 L0.727,79.604 C-0.003,78.867 -0.003,77.535 0.727,76.797 L26.156,51.373 C26.894,50.643 28.225,50.643 28.964,51.373 L30.368,52.777 L33.519,49.626 C28.909,44.358 26.093,37.478 26.093,29.942 C26.093,13.427 39.527,-0.004 56.046,-0.004 L56.046,-0.004 ZM56.046,3.988 C41.686,3.988 30.087,15.585 30.087,29.943 C30.087,44.300 41.686,55.897 56.046,55.897 C70.407,55.897 82.006,44.300 82.006,29.943 C82.006,15.585 70.407,3.988 56.046,3.988 ZM56.046,8.980 C61.609,8.980 67.167,11.144 71.398,15.500 C72.214,16.335 72.227,17.803 71.555,18.550 C70.756,19.384 69.326,19.190 68.621,18.401 C61.663,11.238 50.430,11.238 43.472,18.401 C42.752,19.155 41.432,19.170 40.695,18.431 C39.927,17.677 39.927,16.253 40.695,15.499 C44.926,11.144 50.484,8.980 56.046,8.980 L56.046,8.980 ZM27.560,55.616 L4.970,78.201 L7.778,81.008 L30.368,58.423 L27.560,55.616 Z" />
								</svg>
								<div className={ [ styles[ 'bicycle-block__arrow' ], styles[ '-down-second' ] ].join( ' ' ) }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'bicycle-block__text' ] }>
								Wyszukaj auto, łódź, motocykl lub inny pojazd na aukcji: <a href="http://www.copart.com">www.copart.com</a>,
								<a href="http://www.iaai.com">www.iaai.com</a>. Licytacje są prowadzone z Polski
							</div>
							<div className={ styles[ 'bicycle-block__box' ] }>
								<div className={ [ styles[ 'bicycle-block__box-text' ], styles[ '-margin-bottom' ] ].join( ' ' ) }>
								Zapisz numer aukcji i skontaktuj się z nami za pomocą <a href="/kontakt">formularza</a> lub telefonicznie:
								</div>
								<div className={ styles[ 'bicycle-block__box-row' ] }>
									<div className={ styles[ 'bicycle-block__box-column' ] }>
										<div>USA</div>
										<div>cell</div>
										<div>tel.</div>
									</div>
									<div className={ styles[ 'bicycle-block__box-column' ] }>
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xlink="http://www.w3.org/1999/xlink"
												width="22px" height="15px">
												<path fillRule="evenodd" fill="rgb(17, 29, 56)"
													d="M-0.000,15.000 L-0.000,14.000 L22.000,14.000 L22.000,15.000 L-0.000,15.000 ZM-0.000,12.000 L22.000,12.000 L22.000,13.000 L-0.000,13.000 L-0.000,12.000 ZM-0.000,10.000 L22.000,10.000 L22.000,11.000 L-0.000,11.000 L-0.000,10.000 ZM-0.000,8.000 L-0.000,0.000 L9.000,0.000 L11.000,0.000 L22.000,0.000 L22.000,1.000 L11.000,1.000 L11.000,2.000 L22.000,2.000 L22.000,3.000 L11.000,3.000 L11.000,4.000 L22.000,4.000 L22.000,5.000 L11.000,5.000 L11.000,6.000 L22.000,6.000 L22.000,7.000 L11.000,7.000 L11.000,8.000 L22.000,8.000 L22.000,9.000 L-0.000,9.000 L-0.000,8.000 Z" />
											</svg>
										</div>
										<div className={ styles[ 'color-red' ] }>123456789</div>
										<div className={ styles[ 'color-red' ] }>123456789</div>
									</div>
								</div>
								<div className={ styles[ 'bicycle-block__box-row' ] }>
									<div className={ styles[ 'bicycle-block__box-column' ] }>
										<div>PL</div>
										<div>kom.</div>
										<div>tel.</div>
									</div>
									<div className={ styles[ 'bicycle-block__box-column' ] }>
										<div>
											<img src="http://autoautousa.dev.pl/wp-content/uploads/2019/04/flag-PL.png" alt="" />
										</div>
										<div className={ styles[ 'color-red' ] }>123456789</div>
										<div className={ styles[ 'color-red' ] }>123456789</div>
									</div>
								</div>
							</div>
						</div>
						<div className={ styles[ 'bicycle-block' ] }>
							<div className={ styles[ 'bicycle-block__title' ] }>
								wylicytuj samemu<br />
								lub zleć to nam
							</div>
							<div className={ styles[ 'bicycle-block__img' ] }>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xlink="http://www.w3.org/1999/xlink"
									width="91px" height="92px">
									<path fillRule="evenodd" fill="rgb(255, 0, 0)"
										d="M89.117,91.979 C89.080,91.979 89.052,91.979 89.014,91.979 C86.605,92.026 84.177,91.979 81.759,91.979 C76.790,91.979 71.812,91.979 66.834,91.979 C61.075,91.979 55.326,91.979 49.567,91.979 C44.815,91.979 40.053,91.979 35.301,91.979 C33.335,91.979 31.359,91.979 29.392,91.979 C29.379,91.980 29.368,91.987 29.354,91.988 C28.347,92.035 27.463,91.096 27.472,90.111 C27.472,89.049 27.623,87.970 27.943,86.965 C29.260,82.797 32.986,79.905 37.324,79.520 C38.162,79.445 39.018,79.483 39.856,79.483 C43.911,79.483 47.977,79.483 52.032,79.483 C57.443,79.483 62.863,79.483 68.274,79.483 C71.972,79.483 75.680,79.483 79.378,79.483 C80.987,79.483 82.577,79.576 84.092,80.168 C88.205,81.783 90.971,85.670 90.999,90.101 C91.009,91.115 90.134,91.979 89.117,91.979 ZM87.169,89.157 C87.167,89.397 87.177,89.292 87.169,89.157 ZM31.298,89.129 C31.294,89.155 31.291,89.182 31.286,89.208 C31.286,89.209 31.286,89.210 31.286,89.211 C31.295,89.158 31.305,89.106 31.311,89.049 C31.304,89.057 31.302,89.100 31.298,89.129 ZM86.680,87.369 C86.680,87.369 86.732,87.483 86.762,87.549 C86.732,87.456 86.701,87.373 86.680,87.369 ZM86.763,87.550 C86.754,87.531 86.751,87.524 86.727,87.472 C86.643,87.285 86.549,87.097 86.454,86.918 C86.351,86.721 86.238,86.524 86.116,86.336 C86.059,86.242 85.833,85.801 85.730,85.782 C85.777,85.848 85.824,85.904 85.871,85.970 C85.815,85.904 85.767,85.848 85.711,85.782 C85.626,85.689 85.551,85.604 85.466,85.510 C85.325,85.360 85.184,85.219 85.033,85.078 C84.883,84.938 84.723,84.806 84.572,84.674 C84.564,84.667 84.563,84.666 84.556,84.660 C84.492,84.615 84.429,84.570 84.365,84.524 C83.998,84.271 83.603,84.046 83.199,83.848 C83.159,83.831 83.077,83.785 82.997,83.746 C82.971,83.742 82.951,83.741 82.907,83.726 C82.690,83.651 82.483,83.576 82.257,83.510 C82.022,83.435 81.768,83.379 81.524,83.332 C81.441,83.314 81.358,83.304 81.275,83.286 C81.268,83.285 81.267,83.285 81.260,83.285 C80.959,83.266 80.658,83.238 80.347,83.238 C79.679,83.238 79.002,83.238 78.333,83.238 C74.306,83.238 70.278,83.238 66.251,83.238 C60.972,83.238 55.683,83.238 50.404,83.238 C46.716,83.238 43.018,83.238 39.329,83.238 C38.981,83.238 38.632,83.238 38.284,83.238 C38.228,83.238 38.171,83.238 38.115,83.238 C37.814,83.238 37.503,83.257 37.202,83.285 C37.194,83.285 37.194,83.285 37.187,83.286 C37.104,83.304 37.021,83.314 36.939,83.332 C36.694,83.379 36.449,83.444 36.205,83.510 C35.960,83.576 35.725,83.661 35.489,83.745 C35.441,83.762 35.422,83.765 35.407,83.766 C35.346,83.799 35.285,83.835 35.254,83.848 C34.887,84.027 34.530,84.233 34.191,84.458 C34.100,84.519 34.007,84.589 33.912,84.654 C33.903,84.662 33.901,84.665 33.890,84.674 C33.730,84.806 33.579,84.938 33.429,85.078 C33.269,85.228 33.109,85.388 32.958,85.557 C32.892,85.632 32.826,85.707 32.761,85.782 C32.704,85.848 32.648,85.904 32.600,85.970 C32.648,85.904 32.695,85.848 32.742,85.782 C32.619,85.801 32.394,86.280 32.328,86.383 C32.215,86.552 32.111,86.731 32.017,86.909 C31.925,87.083 31.834,87.265 31.751,87.448 C31.730,87.534 31.693,87.624 31.660,87.707 C31.602,87.871 31.574,88.045 31.527,88.213 C33.258,88.210 34.991,88.223 36.722,88.223 C41.691,88.223 46.669,88.223 51.647,88.223 C57.405,88.223 63.155,88.223 68.914,88.223 C73.666,88.223 78.428,88.223 83.180,88.223 C84.434,88.223 85.691,88.223 86.948,88.223 C86.912,88.096 86.891,87.963 86.850,87.838 C86.839,87.807 86.802,87.669 86.763,87.550 ZM81.364,45.295 C80.310,46.375 79.227,47.426 78.155,48.496 C75.830,50.825 73.497,53.144 71.172,55.463 C68.792,57.838 66.401,60.223 64.021,62.598 C62.741,63.875 61.471,65.152 60.191,66.419 C58.516,68.081 55.966,68.813 53.698,68.025 C52.079,67.462 50.649,66.297 49.943,64.711 C49.153,62.927 49.162,61.049 49.972,59.275 C50.119,58.955 50.308,58.666 50.513,58.387 C48.802,56.695 47.106,54.988 45.398,53.285 C44.017,51.906 42.635,50.528 41.253,49.149 C39.868,50.531 38.481,51.915 37.099,53.294 C33.937,56.449 30.766,59.613 27.604,62.768 C24.226,66.138 20.838,69.518 17.460,72.888 C15.060,75.283 12.661,77.677 10.261,80.071 C9.800,80.531 9.339,81.000 8.868,81.460 C7.880,82.437 6.554,83.019 5.151,83.019 C2.724,83.009 0.465,81.216 0.070,78.794 C-0.203,77.076 0.305,75.414 1.538,74.165 C1.688,74.015 1.839,73.865 1.990,73.714 C2.733,72.973 3.476,72.231 4.220,71.489 C6.958,68.757 9.706,66.016 12.444,63.284 C15.879,59.857 19.323,56.421 22.758,52.994 C25.684,50.074 28.611,47.154 31.537,44.234 C32.333,43.440 33.133,42.642 33.932,41.845 C32.221,40.137 30.512,38.433 28.799,36.723 C27.439,35.366 26.075,34.005 24.712,32.646 C24.475,32.818 24.230,32.979 23.962,33.108 C22.504,33.822 20.800,34.028 19.238,33.540 C15.700,32.423 13.818,28.470 15.267,25.044 C16.020,23.269 17.780,21.870 19.125,20.528 C21.346,18.312 23.576,16.087 25.797,13.871 C28.253,11.421 30.700,8.979 33.156,6.529 C34.633,5.055 36.120,3.572 37.597,2.098 C38.811,0.886 40.260,0.135 41.992,0.013 C43.638,-0.109 45.238,0.530 46.480,1.572 C47.758,2.638 48.461,4.252 48.588,5.897 C48.619,6.030 48.638,6.166 48.635,6.304 C48.638,6.449 48.620,6.588 48.589,6.722 C48.498,7.879 48.131,8.968 47.483,9.906 C48.229,10.652 48.967,11.404 49.708,12.143 C52.049,14.479 54.390,16.815 56.730,19.150 C57.994,17.968 59.642,17.490 61.348,17.777 C63.164,18.087 64.623,19.476 65.235,21.166 C65.895,23.004 65.348,25.050 64.045,26.448 C64.350,26.753 64.656,27.058 64.962,27.363 C67.220,29.616 69.469,31.860 71.718,34.104 C72.241,34.625 72.764,35.147 73.287,35.669 C74.255,34.999 75.375,34.612 76.583,34.526 C78.230,34.404 79.830,35.043 81.072,36.085 C82.455,37.239 83.199,39.033 83.227,40.817 C83.230,40.975 83.206,41.125 83.170,41.270 C83.045,42.785 82.437,44.199 81.364,45.295 ZM53.115,62.467 C53.120,62.473 53.093,62.349 53.082,62.294 C53.085,62.382 53.091,62.457 53.115,62.467 ZM3.712,77.780 C3.690,77.758 3.702,77.692 3.728,77.612 C3.724,77.644 3.719,77.685 3.712,77.780 ZM32.553,48.534 C29.467,51.614 26.380,54.693 23.294,57.772 C19.953,61.106 16.603,64.448 13.263,67.781 C10.807,70.231 8.351,72.682 5.895,75.132 C5.349,75.677 4.813,76.212 4.276,76.747 C4.239,76.785 4.192,76.831 4.154,76.869 C4.108,76.915 4.062,76.967 4.016,77.018 C4.006,77.024 3.981,77.050 3.928,77.113 C3.957,77.080 3.987,77.050 4.016,77.018 C4.043,77.002 3.942,77.155 3.867,77.275 C3.835,77.344 3.770,77.485 3.731,77.603 C3.731,77.613 3.733,77.606 3.730,77.648 C3.721,77.724 3.721,77.799 3.721,77.874 C3.721,77.885 3.727,77.967 3.732,78.042 C3.749,78.125 3.773,78.249 3.777,78.259 C3.788,78.295 3.801,78.332 3.814,78.368 C3.803,78.341 3.812,78.374 3.833,78.425 C3.846,78.464 3.860,78.502 3.872,78.540 C3.853,78.481 3.845,78.458 3.834,78.428 C3.845,78.454 3.858,78.483 3.872,78.503 C3.909,78.559 4.201,78.972 3.928,78.634 C4.013,78.737 4.210,79.038 4.342,79.057 C4.135,78.897 4.107,78.888 4.276,79.000 C4.333,79.038 4.389,79.075 4.446,79.103 C4.477,79.122 4.532,79.160 4.586,79.193 C4.608,79.198 4.609,79.196 4.653,79.207 C4.756,79.235 4.860,79.273 4.963,79.291 C4.970,79.293 4.968,79.292 4.974,79.294 C5.053,79.296 5.174,79.301 5.161,79.301 C5.236,79.301 5.312,79.294 5.387,79.292 C5.399,79.288 5.401,79.286 5.415,79.282 C5.450,79.270 5.573,79.251 5.668,79.227 C5.679,79.221 5.675,79.224 5.688,79.216 C5.782,79.160 5.876,79.113 5.970,79.057 C6.014,79.027 6.054,78.998 6.096,78.968 C6.124,78.937 6.154,78.902 6.168,78.888 C6.205,78.850 6.243,78.812 6.281,78.775 C6.469,78.587 6.666,78.390 6.855,78.202 C7.654,77.404 8.464,76.597 9.264,75.799 C12.021,73.048 14.787,70.287 17.554,67.527 C20.941,64.147 24.329,60.768 27.717,57.388 C30.587,54.524 33.447,51.670 36.318,48.806 C37.079,48.046 37.844,47.283 38.609,46.520 C37.936,45.849 37.264,45.178 36.590,44.506 C35.245,45.849 33.899,47.191 32.553,48.534 ZM18.547,27.860 C18.543,27.800 18.538,27.686 18.532,27.691 C18.515,27.708 18.528,27.780 18.547,27.860 ZM18.531,27.124 C18.543,27.067 18.555,27.012 18.551,27.015 C18.539,27.021 18.534,27.068 18.531,27.124 ZM44.866,5.881 C44.839,5.771 44.798,5.642 44.787,5.609 C44.768,5.515 44.730,5.421 44.702,5.327 C44.696,5.316 44.683,5.285 44.670,5.254 C44.665,5.243 44.658,5.228 44.655,5.224 C44.598,5.140 44.561,5.046 44.504,4.961 C44.464,4.893 44.385,4.782 44.368,4.751 C44.276,4.642 44.184,4.531 44.081,4.436 C44.043,4.398 44.000,4.360 43.960,4.323 C43.972,4.326 43.985,4.335 43.996,4.332 C43.988,4.334 43.968,4.323 43.947,4.310 C43.941,4.305 43.935,4.300 43.930,4.295 C43.847,4.215 43.836,4.221 43.851,4.245 C43.774,4.188 43.692,4.122 43.667,4.107 C43.595,4.065 43.484,3.993 43.375,3.934 C43.365,3.932 43.370,3.935 43.347,3.928 C43.281,3.910 43.224,3.881 43.159,3.863 C43.008,3.816 42.867,3.778 42.716,3.750 C42.695,3.746 42.688,3.744 42.672,3.741 C42.660,3.740 42.657,3.741 42.641,3.741 C42.462,3.731 42.293,3.722 42.124,3.731 C42.097,3.731 42.066,3.734 42.036,3.736 C41.825,3.816 41.541,3.858 41.322,3.915 C41.261,3.950 41.207,3.977 41.154,4.004 C41.022,4.079 40.891,4.163 40.759,4.248 C40.740,4.259 40.747,4.253 40.734,4.260 C40.723,4.272 40.731,4.267 40.712,4.285 C40.646,4.351 40.580,4.407 40.514,4.473 C40.496,4.492 40.467,4.520 40.448,4.539 C40.053,4.924 39.668,5.318 39.272,5.712 C37.419,7.562 35.565,9.411 33.711,11.261 C31.302,13.664 28.884,16.077 26.465,18.490 C24.555,20.396 22.645,22.302 20.734,24.208 C20.292,24.649 19.850,25.091 19.408,25.532 C19.370,25.569 19.332,25.607 19.295,25.644 C19.285,25.654 19.285,25.654 19.276,25.663 C19.193,25.746 19.117,25.832 19.041,25.918 C19.042,25.931 18.908,26.119 18.862,26.198 C18.787,26.330 18.645,26.705 18.758,26.358 C18.702,26.527 18.645,26.687 18.598,26.856 C18.579,26.931 18.570,26.996 18.551,27.072 C18.542,27.109 18.536,27.132 18.530,27.156 C18.527,27.272 18.532,27.422 18.532,27.457 C18.532,27.578 18.551,27.701 18.551,27.823 C18.551,27.862 18.551,27.865 18.550,27.874 C18.584,28.011 18.640,28.175 18.645,28.198 C18.657,28.243 18.714,28.394 18.741,28.473 C18.764,28.518 18.786,28.564 18.796,28.583 C18.834,28.649 18.871,28.715 18.909,28.780 C18.935,28.820 18.961,28.859 18.988,28.899 C18.978,28.895 19.022,28.978 19.069,29.024 C19.172,29.137 19.276,29.250 19.389,29.353 C19.405,29.364 19.455,29.415 19.505,29.461 C19.630,29.542 19.754,29.630 19.878,29.700 C19.947,29.743 20.275,29.872 20.149,29.838 C20.240,29.864 20.356,29.898 20.386,29.907 C20.534,29.953 20.674,29.972 20.822,30.009 C20.826,30.009 20.834,30.010 20.838,30.010 C21.017,30.020 21.186,30.020 21.355,30.010 C21.395,30.009 21.415,30.009 21.438,30.009 C21.558,29.981 21.687,29.963 21.807,29.926 C21.892,29.907 22.325,29.775 22.071,29.851 C21.826,29.926 22.089,29.841 22.146,29.813 C22.231,29.775 22.306,29.738 22.381,29.691 C22.486,29.635 22.576,29.571 22.670,29.507 C22.714,29.460 22.763,29.423 22.805,29.381 C22.852,29.334 22.908,29.278 22.955,29.231 C23.303,28.884 23.652,28.536 24.000,28.189 C25.637,26.555 27.265,24.931 28.893,23.307 C29.987,22.215 31.079,21.126 32.171,20.036 C33.706,18.504 35.241,16.973 36.779,15.439 C37.902,14.318 39.027,13.195 40.153,12.072 C40.772,11.454 41.391,10.837 42.011,10.219 C42.481,9.749 42.952,9.280 43.422,8.811 C43.535,8.698 43.657,8.576 43.780,8.454 C43.893,8.341 44.006,8.228 44.119,8.116 C44.202,8.033 44.278,7.942 44.354,7.853 C44.363,7.833 44.447,7.715 44.495,7.637 C44.557,7.532 44.603,7.420 44.662,7.321 C44.709,7.182 44.757,7.046 44.796,6.905 C44.808,6.858 44.839,6.687 44.856,6.611 C44.861,6.504 44.871,6.348 44.871,6.304 C44.871,6.210 44.862,6.107 44.862,5.985 C44.862,5.920 44.864,5.896 44.866,5.881 ZM61.743,22.772 C61.743,22.734 61.740,22.697 61.739,22.659 C61.704,22.543 61.676,22.427 61.649,22.312 C61.645,22.295 61.644,22.289 61.641,22.276 C61.629,22.262 61.615,22.242 61.593,22.208 C61.568,22.171 61.447,22.000 61.437,21.971 C61.367,21.898 61.296,21.825 61.226,21.748 C61.220,21.741 61.224,21.744 61.218,21.738 C61.111,21.676 60.990,21.615 60.892,21.545 C60.777,21.510 60.663,21.483 60.539,21.448 C60.539,21.448 60.539,21.448 60.538,21.447 C60.534,21.447 60.534,21.448 60.530,21.448 C60.426,21.448 60.323,21.448 60.210,21.448 C60.185,21.448 60.160,21.451 60.135,21.451 C60.048,21.472 59.956,21.490 59.871,21.513 C59.843,21.520 59.817,21.532 59.790,21.541 C59.704,21.593 59.500,21.703 59.485,21.711 C59.474,21.718 59.471,21.718 59.461,21.723 C59.452,21.733 59.450,21.737 59.438,21.748 C59.420,21.766 59.402,21.782 59.384,21.798 C60.050,22.462 60.716,23.126 61.382,23.791 C61.456,23.705 61.530,23.597 61.517,23.624 C61.571,23.532 61.624,23.438 61.678,23.344 C61.471,23.673 61.659,23.363 61.696,23.232 C61.715,23.166 61.734,23.091 61.743,23.016 C61.751,22.977 61.751,22.988 61.754,22.977 C61.752,22.900 61.743,22.823 61.743,22.772 ZM68.396,36.103 C66.035,33.747 63.673,31.390 61.311,29.034 C59.832,27.559 58.351,26.081 56.870,24.604 C56.377,24.111 55.884,23.619 55.392,23.128 C55.392,23.128 55.392,23.128 55.392,23.128 C54.642,22.380 53.891,21.631 53.143,20.884 C50.884,18.631 48.635,16.387 46.386,14.143 C45.889,13.647 45.392,13.151 44.895,12.655 C44.767,12.783 44.640,12.910 44.512,13.037 C44.179,13.367 43.849,13.698 43.516,14.031 C41.220,16.321 38.924,18.613 36.628,20.903 C34.257,23.269 31.895,25.625 29.523,27.992 C28.834,28.680 28.144,29.368 27.454,30.056 C29.141,31.719 30.806,33.411 32.488,35.089 C34.268,36.866 36.048,38.642 37.828,40.418 C37.861,40.446 37.905,40.457 37.936,40.488 C39.489,42.037 41.051,43.596 42.603,45.145 C42.635,45.176 42.645,45.220 42.674,45.253 C42.698,45.276 42.721,45.300 42.745,45.323 C44.862,47.436 46.970,49.539 49.087,51.651 C50.422,52.983 51.762,54.320 53.100,55.655 C53.321,55.435 53.540,55.216 53.760,54.997 C53.790,54.968 53.819,54.938 53.848,54.909 C54.321,54.437 54.792,53.967 55.264,53.496 C58.542,50.226 61.814,46.961 65.094,43.689 C66.906,41.882 68.723,40.068 70.537,38.258 C69.820,37.540 69.110,36.815 68.396,36.103 ZM79.429,40.440 C79.402,40.330 79.361,40.202 79.350,40.169 C79.331,40.075 79.293,39.981 79.265,39.887 C79.259,39.875 79.246,39.845 79.234,39.814 C79.228,39.802 79.221,39.788 79.218,39.784 C79.162,39.699 79.124,39.605 79.067,39.521 C79.033,39.462 78.967,39.365 78.939,39.320 C78.845,39.207 78.750,39.093 78.644,38.995 C78.606,38.958 78.564,38.920 78.523,38.882 C78.536,38.885 78.548,38.895 78.559,38.892 C78.552,38.894 78.531,38.882 78.510,38.870 C78.504,38.865 78.499,38.859 78.493,38.854 C78.410,38.775 78.399,38.781 78.414,38.805 C78.337,38.748 78.255,38.682 78.230,38.667 C78.152,38.625 78.040,38.551 77.932,38.493 C77.922,38.490 77.928,38.493 77.910,38.488 C77.844,38.469 77.788,38.441 77.722,38.423 C77.571,38.376 77.430,38.338 77.280,38.310 C77.258,38.306 77.251,38.304 77.235,38.300 C77.223,38.300 77.220,38.301 77.204,38.300 C77.026,38.291 76.856,38.281 76.687,38.291 C76.661,38.291 76.629,38.293 76.600,38.295 C76.389,38.376 76.105,38.418 75.886,38.475 C75.825,38.509 75.770,38.537 75.717,38.563 C75.586,38.638 75.454,38.723 75.322,38.807 C75.303,38.819 75.310,38.812 75.297,38.820 C75.286,38.831 75.294,38.826 75.275,38.845 C75.200,38.911 75.125,38.976 75.049,39.051 C74.886,39.206 74.732,39.366 74.577,39.523 C74.562,39.539 74.557,39.562 74.541,39.577 C73.713,40.404 72.876,41.239 72.048,42.065 C68.434,45.670 64.830,49.266 61.217,52.872 C58.958,55.125 56.690,57.388 54.432,59.641 C54.416,59.656 54.394,59.661 54.378,59.676 C54.333,59.721 54.286,59.767 54.244,59.810 C54.112,59.941 53.980,60.063 53.858,60.195 C53.783,60.279 53.698,60.364 53.623,60.448 C53.614,60.457 53.595,60.482 53.576,60.508 C53.546,60.554 53.512,60.608 53.500,60.627 C53.406,60.777 53.331,60.936 53.246,61.096 C53.444,60.730 53.237,61.153 53.199,61.274 C53.172,61.385 53.126,61.521 53.105,61.647 C53.105,61.649 53.105,61.648 53.105,61.650 C53.105,61.725 53.096,61.800 53.096,61.875 C53.096,61.917 53.079,62.126 53.082,62.285 C53.085,62.294 53.086,62.297 53.096,62.336 C53.124,62.429 53.133,62.533 53.162,62.626 C53.195,62.754 53.243,62.880 53.280,63.007 C53.283,63.011 53.281,63.007 53.284,63.011 C53.321,63.068 53.350,63.143 53.387,63.208 C53.428,63.283 53.602,63.532 53.605,63.555 C53.681,63.641 53.756,63.727 53.839,63.810 C53.856,63.831 53.941,63.910 54.012,63.977 C54.050,63.994 54.268,64.157 54.310,64.185 C54.427,64.252 54.552,64.312 54.671,64.378 C54.720,64.395 54.766,64.414 54.818,64.429 C54.968,64.476 55.110,64.513 55.260,64.542 C55.277,64.545 55.296,64.551 55.316,64.553 C55.477,64.563 55.633,64.578 55.787,64.570 C55.825,64.570 55.871,64.566 55.915,64.564 C56.128,64.478 56.431,64.436 56.650,64.377 C56.708,64.346 56.767,64.316 56.822,64.288 C56.935,64.222 57.048,64.157 57.161,64.082 C57.183,64.067 57.229,64.032 57.268,64.004 C57.332,63.939 57.397,63.884 57.462,63.819 C57.744,63.547 58.008,63.274 58.281,63.002 C59.993,61.293 61.696,59.594 63.409,57.885 C65.818,55.482 68.218,53.088 70.627,50.684 C72.650,48.666 74.682,46.638 76.715,44.610 C77.270,44.056 77.816,43.511 78.371,42.957 C78.484,42.845 78.588,42.741 78.691,42.638 C78.701,42.629 78.701,42.629 78.710,42.619 C78.794,42.535 78.871,42.448 78.948,42.360 C78.967,42.327 79.042,42.221 79.086,42.150 C79.148,42.044 79.194,41.932 79.254,41.833 C79.301,41.694 79.348,41.559 79.387,41.417 C79.399,41.371 79.430,41.200 79.447,41.124 C79.453,41.016 79.463,40.860 79.463,40.817 C79.463,40.723 79.453,40.620 79.425,40.545 C79.425,40.480 79.427,40.455 79.429,40.440 ZM78.510,38.870 C78.514,38.874 78.519,38.878 78.523,38.882 C78.475,38.870 78.430,38.831 78.414,38.805 C78.451,38.832 78.483,38.854 78.510,38.870 ZM18.988,28.899 C18.994,28.902 19.015,28.928 19.078,29.034 C19.053,28.989 19.020,28.944 18.988,28.899 ZM43.947,4.310 C43.951,4.314 43.956,4.318 43.960,4.323 C43.912,4.310 43.866,4.271 43.851,4.245 C43.887,4.272 43.920,4.294 43.947,4.310 ZM3.833,78.425 C3.826,78.406 3.821,78.387 3.814,78.368 C3.818,78.377 3.826,78.402 3.834,78.428 C3.834,78.427 3.833,78.426 3.833,78.425 Z" />
								</svg>
								<div className={ [ styles[ 'bicycle-block__arrow' ], styles[ '-down-first' ] ].join( ' ' ) }>
									{ svgArrow }
								</div>
							</div>
							<div className={ styles[ 'bicycle-block__text' ] }>
								Ustalenie kwoty licytacji podpisanie umowy i wpłata zadatku 10% opcja zapłaty w Polsce lub w Portach Gdynia lub Bremenhaven
							</div>
							<div className={ styles[ 'bicycle-block__box' ] }>
								<div className={ styles[ 'bicycle-block__box-text' ] }>
									W przypadku przegranej licytacji, w której nie doszło do zakupu, kaucja jest zwracana w całości w ciągu 2 dni roboczych na konto Klienta, kaucja zawsze jest wpłacana na Polskie konto w PLN
									<br /><br />
									Zwrot kaucji bez prowizji!
								</div>
							</div>
						</div>
						<div className={ styles[ 'bicycle-block' ] }>
							<div className={ styles[ 'bicycle-block__title' ] }>
								zapłać i odbierz samemu<br />
								lub zleć dostawę nam
							</div>
							<div className={ [ styles[ 'bicycle-block__img' ], styles[ '-double' ] ].join( ' ' ) }>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xlink="http://www.w3.org/1999/xlink"
									width="103px" height="60px">
									<path fillRule="evenodd" fill="rgb(255, 0, 0)"
										d="M99.812,14.149 L100.579,18.020 C100.649,18.369 100.572,18.732 100.364,19.028 C100.157,19.319 99.837,19.515 99.479,19.568 L89.023,21.146 C85.568,22.856 81.785,24.166 78.287,24.166 C75.117,24.166 71.963,25.944 69.406,29.175 C68.562,30.242 67.824,31.419 67.205,32.648 L73.091,34.377 C76.178,30.013 81.137,27.435 86.549,27.435 C95.622,27.435 103.002,34.735 103.002,43.708 C103.002,52.686 95.622,59.989 86.549,59.989 C78.793,59.989 72.237,54.732 70.540,47.352 C69.812,47.309 69.115,47.263 68.446,47.215 C68.509,47.370 68.545,47.535 68.545,47.704 L68.545,51.556 C68.545,52.280 67.953,52.868 67.219,52.868 L38.271,52.868 C38.253,52.868 38.236,52.868 38.220,52.868 C37.486,52.868 36.894,52.280 36.894,51.558 C36.894,51.397 36.922,51.240 36.976,51.097 C37.599,42.466 35.670,35.573 31.235,30.607 C29.566,28.735 27.671,27.295 25.764,26.184 L24.847,28.179 C27.449,29.629 29.688,31.727 31.335,34.352 C31.570,34.727 31.599,35.190 31.412,35.591 C31.313,35.806 31.156,35.983 30.965,36.115 C32.220,38.453 32.907,41.036 32.907,43.708 C32.907,52.686 25.528,59.989 16.456,59.989 C7.380,59.989 -0.000,52.686 0.001,43.708 C0.001,39.699 1.512,35.875 4.184,32.909 C3.766,32.752 3.453,32.399 3.358,31.963 C3.262,31.515 3.410,31.046 3.750,30.731 C7.104,27.621 11.472,25.906 16.044,25.906 C18.274,25.906 20.433,26.315 22.442,27.071 L23.405,24.977 C18.455,22.730 14.016,22.482 13.947,22.481 C13.634,22.465 13.331,22.339 13.100,22.126 C11.999,21.106 11.455,19.754 11.522,18.213 C11.815,11.590 23.557,2.292 24.893,1.255 C25.168,1.045 25.519,0.945 25.853,0.984 L37.986,2.249 C38.558,2.308 39.027,2.728 39.144,3.287 C39.264,3.845 39.002,4.414 38.500,4.694 C33.649,7.416 26.583,12.640 26.811,15.172 C26.912,15.446 27.276,15.772 27.834,16.135 C30.089,13.999 37.224,7.927 45.505,7.927 C54.529,7.927 63.076,7.927 65.304,16.455 L73.018,16.455 L84.160,8.188 C84.387,8.020 84.666,7.927 84.954,7.927 L99.994,7.927 C100.727,7.927 101.320,8.513 101.320,9.239 L101.320,12.288 C101.320,12.668 101.155,13.027 100.867,13.276 C100.787,13.346 100.416,13.664 99.812,14.149 ZM97.711,17.179 L97.467,15.945 C96.775,16.451 95.997,16.999 95.151,17.565 L97.711,17.179 ZM86.549,57.364 C94.157,57.364 100.348,51.237 100.348,43.707 C100.348,36.181 94.157,30.058 86.549,30.058 C82.311,30.058 78.405,31.942 75.800,35.170 L78.223,35.882 C80.422,33.548 83.438,32.214 86.645,32.214 C93.059,32.214 98.276,37.374 98.276,43.719 C98.276,50.053 93.058,55.209 86.645,55.209 C81.702,55.209 77.352,52.104 75.727,47.539 C74.915,47.522 74.098,47.518 73.301,47.486 C74.974,53.301 80.300,57.364 86.549,57.364 ZM88.619,39.216 C88.773,39.312 88.927,39.418 89.081,39.535 C89.118,39.563 89.155,39.589 89.192,39.619 C89.374,39.763 89.552,39.917 89.719,40.093 C90.075,40.467 90.381,40.913 90.574,41.441 C90.871,42.258 90.994,43.575 89.887,45.201 C89.887,45.201 89.886,45.201 89.886,45.202 C89.886,45.202 89.886,45.202 89.886,45.202 C89.806,45.319 89.708,45.437 89.597,45.554 C89.592,45.559 89.587,45.564 89.582,45.570 C89.472,45.683 89.341,45.795 89.189,45.906 C89.181,45.912 89.172,45.918 89.163,45.925 C88.687,46.264 87.979,46.581 86.887,46.844 C86.873,46.847 86.859,46.850 86.845,46.854 C85.745,47.115 84.251,47.319 82.211,47.436 C82.189,47.437 82.172,47.439 82.149,47.441 C82.086,47.445 82.017,47.446 81.954,47.450 C81.740,47.461 81.526,47.473 81.300,47.482 C80.425,47.528 79.526,47.556 78.606,47.567 C80.074,50.591 83.168,52.586 86.645,52.586 C91.597,52.586 95.624,48.610 95.624,43.720 C95.624,38.823 91.596,34.839 86.645,34.839 C84.636,34.839 82.719,35.515 81.157,36.744 L86.923,38.439 C87.067,38.480 87.767,38.701 88.532,39.161 C88.561,39.179 88.589,39.197 88.619,39.216 ZM71.406,44.759 C71.501,44.744 71.598,44.741 71.692,44.755 C73.575,44.845 75.708,44.913 77.810,44.918 L78.021,44.919 C79.356,44.919 80.489,44.889 81.484,44.842 C81.792,44.827 82.091,44.812 82.369,44.794 C82.560,44.781 82.748,44.768 82.927,44.755 C83.206,44.733 83.466,44.709 83.714,44.685 C83.885,44.668 84.053,44.651 84.210,44.632 C84.471,44.602 84.717,44.570 84.941,44.538 C85.063,44.520 85.175,44.502 85.287,44.483 C85.454,44.456 85.610,44.428 85.755,44.399 C85.840,44.383 85.931,44.367 86.008,44.350 C86.204,44.308 86.379,44.266 86.533,44.225 C86.591,44.209 86.639,44.194 86.691,44.179 C86.796,44.148 86.894,44.118 86.978,44.088 C87.018,44.075 87.058,44.061 87.094,44.048 C87.319,43.963 87.469,43.887 87.555,43.832 C87.557,43.831 87.559,43.830 87.560,43.829 C87.597,43.801 87.647,43.774 87.674,43.745 C87.677,43.742 87.683,43.736 87.684,43.735 C88.076,43.164 88.205,42.691 88.078,42.334 C87.831,41.651 86.687,41.109 86.171,40.955 L73.278,37.170 C73.274,37.169 73.271,37.166 73.267,37.165 L66.178,35.083 C65.126,38.013 64.748,41.018 65.284,43.391 C65.551,43.751 65.809,44.081 66.060,44.394 C67.880,44.550 69.675,44.672 71.406,44.759 ZM2.652,43.708 C2.652,51.238 8.843,57.366 16.454,57.366 C24.062,57.366 30.253,51.238 30.253,43.708 C30.253,41.214 29.572,38.800 28.276,36.676 L25.817,37.058 C27.227,38.997 28.011,41.323 28.011,43.719 C28.011,50.053 22.793,55.209 16.379,55.209 C9.974,55.209 4.762,50.054 4.762,43.720 C4.762,40.099 6.473,36.788 9.268,34.645 L6.924,33.849 C4.201,36.425 2.652,39.979 2.652,43.708 ZM16.456,47.975 C14.185,47.975 12.341,46.151 12.341,43.906 C12.341,41.661 14.186,39.834 16.456,39.834 C16.495,39.834 16.531,39.845 16.571,39.846 L17.652,37.492 L12.460,35.730 C9.377,37.211 7.413,40.297 7.413,43.719 C7.413,48.609 11.437,52.585 16.379,52.585 C21.331,52.585 25.359,48.609 25.359,43.719 C25.359,41.383 24.444,39.209 22.772,37.533 L20.375,37.906 L19.056,40.776 C19.973,41.523 20.571,42.641 20.571,43.906 C20.571,46.151 18.724,47.975 16.456,47.975 ZM17.918,43.906 C17.918,43.106 17.263,42.459 16.456,42.459 C15.649,42.459 14.993,43.106 14.994,43.906 C14.994,44.703 15.649,45.351 16.456,45.351 C17.263,45.351 17.918,44.703 17.918,43.906 ZM16.044,28.532 C12.916,28.532 9.901,29.476 7.353,31.220 L18.756,35.091 L21.338,29.474 C19.670,28.866 17.887,28.532 16.044,28.532 ZM21.692,35.043 L23.000,34.839 C23.001,34.839 23.002,34.839 23.003,34.839 L27.881,34.079 C26.707,32.661 25.297,31.496 23.736,30.596 L21.692,35.043 ZM24.180,15.457 C23.830,11.652 29.744,7.111 33.828,4.452 L26.114,3.647 C22.490,6.538 14.368,13.910 14.173,18.328 C14.146,18.954 14.289,19.463 14.626,19.896 C17.042,20.109 26.548,21.403 33.204,28.845 C37.958,34.156 40.137,41.352 39.686,50.244 L65.894,50.244 L65.895,50.244 L65.895,48.234 C64.320,46.581 58.657,40.204 58.657,33.868 C58.657,31.066 46.870,26.689 39.826,24.073 C29.722,20.318 24.437,18.230 24.180,15.457 ZM98.668,10.551 L85.399,10.551 L74.258,18.818 C74.030,18.987 73.750,19.080 73.463,19.080 L64.239,19.080 C63.598,19.080 63.049,18.626 62.932,18.003 C61.621,10.909 55.457,10.551 45.506,10.551 C38.913,10.551 32.867,15.193 30.312,17.452 C33.271,18.835 37.514,20.413 40.758,21.617 C53.172,26.229 61.308,29.573 61.308,33.869 C61.308,35.528 61.816,37.229 62.546,38.834 C62.784,36.955 63.311,35.006 64.088,33.118 C64.090,33.112 64.088,33.106 64.090,33.100 C64.094,33.088 64.103,33.080 64.107,33.068 C64.917,31.114 65.997,29.228 67.319,27.559 C70.389,23.679 74.284,21.542 78.287,21.542 C86.187,21.542 96.408,13.531 98.668,11.678 L98.668,10.551 Z" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xlink="http://www.w3.org/1999/xlink"
									width="106px" height="43px">
									<path fillRule="evenodd" fill="rgb(255, 0, 0)"
										d="M106.000,16.529 L106.000,41.234 C106.000,42.208 105.209,42.998 104.233,42.998 L43.872,42.998 C40.307,42.995 36.791,42.167 33.600,40.579 L13.001,30.293 C10.439,29.024 8.822,26.409 8.833,23.553 L8.833,23.170 C8.834,21.051 9.733,19.031 11.307,17.611 C4.600,15.582 0.011,9.412 0.000,2.413 C0.000,1.438 0.791,0.648 1.767,0.648 L14.328,0.648 L31.606,0.648 L74.394,0.648 L91.672,0.648 L104.233,0.648 C105.209,0.648 106.000,1.438 106.000,2.413 C105.999,7.214 103.818,11.757 100.071,14.765 L104.233,14.765 C105.209,14.765 106.000,15.555 106.000,16.529 ZM12.367,23.553 C12.361,25.070 13.220,26.459 14.582,27.133 L35.181,37.419 C37.880,38.765 40.855,39.466 43.872,39.469 L79.500,39.469 L79.500,17.578 C72.505,13.938 64.151,14.034 57.242,17.833 L56.789,18.079 C56.530,18.220 56.240,18.294 55.945,18.294 L42.400,18.294 C40.448,18.294 38.867,19.874 38.867,21.823 C38.867,23.773 40.448,25.352 42.400,25.352 L56.533,25.352 C57.509,25.352 58.300,26.142 58.300,27.117 C58.300,28.092 57.509,28.882 56.533,28.882 L38.867,28.882 C38.612,28.881 38.361,28.826 38.130,28.719 L18.041,19.529 C17.512,19.285 16.936,19.160 16.354,19.162 C14.145,19.169 12.360,20.963 12.367,23.170 L12.367,23.553 ZM36.315,18.294 L23.823,18.294 L35.579,23.672 C35.081,21.854 35.347,19.912 36.315,18.294 ZM102.341,4.177 L3.659,4.177 C4.545,10.251 9.755,14.757 15.900,14.765 L42.400,14.765 L55.556,14.733 C63.700,10.262 73.570,10.274 81.703,14.765 L90.100,14.765 C96.245,14.757 101.455,10.251 102.341,4.177 ZM102.466,18.294 L83.033,18.294 L83.033,39.469 L102.466,39.469 L102.466,18.294 ZM90.100,35.940 L86.567,35.940 L86.567,32.411 L90.100,32.411 L90.100,35.940 Z" />
								</svg>
							</div>
							<div className={ [ styles[ 'bicycle-block__text' ], styles[ '-column' ] ].join( ' ' ) }>
								<div>
									<span className={ styles[ 'bicycle-block__pin' ] }>{ svgPin }</span> Krze Duże okolice Warszawy
								</div>
								<div>
									<span className={ styles[ 'bicycle-block__pin' ] }>{ svgPin }</span> Port w Gdyni
								</div>
								<div>
									<span className={ styles[ 'bicycle-block__pin' ] }>{ svgPin }</span> Port w Bremerhaven
								</div>
							</div>
							<div className={ styles[ 'bicycle-block__box' ] }>
								<div className={ styles[ 'bicycle-block__box-text' ] }>
									Tylko u nas, auta do 5 000$ w przypadkach odbioru w Krze Duże pod Warszawą załatwiamy wszystkie formalności podatkowo celne i wystawiamy fakturę VAT.<br />
									<span>Zobacz szczegóły</span>
									<br /><br />
									W przypadkach odbioru w porcie jest możliwość załatwienia formalności podatkowo celnych i transport pod dom.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};