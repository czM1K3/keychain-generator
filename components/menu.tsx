import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React, { FC, Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { checkGenerateTypes, generateTypes } from "../lib/generateTypes";
import { FormikProvider, useFormik } from "formik";
import { serialize } from "@jscad/stl-serializer";
import { styled } from "@mui/system";
import { keychain } from "../lib/keychain";

type MenuProps = {
	useFilter: [generateTypes, Dispatch<SetStateAction<generateTypes>>];
};

const Menu: FC<MenuProps> = ({ useFilter }) => {
	const [filter, setFilter] = useFilter;

	const initialValues: generateTypes = { ...filter };

	const updateData = (data: generateTypes) => {
		if (checkGenerateTypes(data)) setFilter(data);
	};

	const download = (data: generateTypes) => {
		const fileName = `keyring-${data.myText.match(/[A-Za-z0-9]/g).join("")}.stl`;
		const rawData = serialize({ binary: true }, keychain(data));
		const blob = new Blob(rawData);
		const blobUrl = URL.createObjectURL(blob);
		const tempLink = document.createElement("a");
		tempLink.href = blobUrl;
		tempLink.setAttribute("download", fileName);
		tempLink.click();
	};

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: download,
		validate: updateData,
		validateOnChange: true,
	});

	return (
		<MenuPaper elevation={3}>
			<FormikProvider value={formik}>
				<form onSubmit={formik.handleSubmit}>
					<Stack spacing={2}>
						<Typography variant="h6" component="h1">
							Keychain Generator
						</Typography>
						<Stack direction="row" spacing={2}>
							<TextField
								fullWidth
								id="width"
								name="width"
								label="Width (mm)"
								value={formik.values.width}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.width && Boolean(formik.errors.width)}
								helperText={formik.touched.width && formik.errors.width}
								size="small"
								type="number"
								min="30"
								max="200"
								aria-label="Width"
							/>
							<TextField
								fullWidth
								id="height"
								name="height"
								label="Height (mm)"
								value={formik.values.height}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.height && Boolean(formik.errors.height)}
								helperText={formik.touched.height && formik.errors.height}
								size="small"
								type="number"
								min="10"
								max="50"
								aria-label="Height"
							/>
						</Stack>
						<Stack direction="row" spacing={2}>
							<TextField
								fullWidth
								id="depth"
								name="depth"
								label="Depth (mm)"
								value={formik.values.depth}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.depth && Boolean(formik.errors.depth)}
								helperText={formik.touched.depth && formik.errors.depth}
								size="small"
								type="number"
								min=".2"
								max="10"
								step="0.1"
								aria-label="Depth"
							/>
							<TextField
								fullWidth
								id="holeDiameter"
								name="holeDiameter"
								label="Hole Diameter (mm)"
								value={formik.values.holeDiameter}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={
									formik.touched.holeDiameter && Boolean(formik.errors.holeDiameter)
								}
								helperText={formik.touched.holeDiameter && formik.errors.holeDiameter}
								size="small"
								type="number"
								min=".1"
								max="10"
								step="0.1"
								aria-label="Hole Diameter"
							/>
						</Stack>
						<TextField
							fullWidth
							id="myText"
							name="myText"
							label="Text"
							value={formik.values.myText}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.myText && Boolean(formik.errors.myText)}
							helperText={formik.touched.myText && formik.errors.myText}
							size="small"
							type="text"
							aria-label="Text"
						/>
						<Stack direction="row" spacing={2}>
							<TextField
								fullWidth
								id="textDepth"
								name="textDepth"
								label="Text Depth (mm)"
								value={formik.values.textDepth}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.textDepth && Boolean(formik.errors.textDepth)}
								helperText={formik.touched.textDepth && formik.errors.textDepth}
								size="small"
								type="number"
								min="0.1"
								max="10"
								step="0.1"
								aria-label="Text Depth"
							/>
							<TextField
								fullWidth
								id="textWidth"
								name="textWidth"
								label="Text Width (mm)"
								value={formik.values.textWidth}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.textWidth && Boolean(formik.errors.textWidth)}
								helperText={formik.touched.textWidth && formik.errors.textWidth}
								size="small"
								type="number"
								min="1"
								max="10"
								step="1"
								aria-label="Text Width"
							/>
						</Stack>
						<TextField
							fullWidth
							id="textScale"
							name="textScale"
							label="Text Scale (%)"
							value={formik.values.textScale}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.textScale && Boolean(formik.errors.textScale)}
							helperText={formik.touched.textScale && formik.errors.textScale}
							size="small"
							type="number"
							min="0.1"
							max="10"
							step="0.05"
							aria-label="Text Scale"
						/>
						<Stack direction="row" spacing={2}>
							<TextField
								fullWidth
								id="textOffsetX"
								name="textOffsetX"
								label="Text Offset X (mm)"
								value={formik.values.textOffsetX}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.textOffsetX && Boolean(formik.errors.textOffsetX)}
								helperText={formik.touched.textOffsetX && formik.errors.textOffsetX}
								size="small"
								type="number"
								min="-10"
								max="50"
								step="1"
								aria-label="Text Offset X"
							/>
							<TextField
								fullWidth
								id="textOffsetY"
								name="textOffsetY"
								label="Text Offset Y (mm)"
								value={formik.values.textOffsetY}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.textOffsetY && Boolean(formik.errors.textOffsetY)}
								helperText={formik.touched.textOffsetY && formik.errors.textOffsetY}
								size="small"
								type="number"
								min="-10"
								max="50"
								step="1"
								aria-label="Text Offset Y"
							/>
						</Stack>
						<FormControlLabel
							control={
								<Checkbox
									id="outer"
									name="outer"
									checked={formik.values.outer}
									onChange={formik.handleChange}
									size="small"
								/>
							}
							label="Outer Text"
						/>
						<Button variant="contained" type="submit">
							Download STL
						</Button>
					</Stack>
				</form>
			</FormikProvider>
		</MenuPaper>
	);
};

const MenuPaper = styled(Paper)(({ theme }) => ({
	backgroundColor: "hsla(0, 0%, 73%, .8)",
	padding: theme.spacing(2),
	position: "fixed",
	top: 10,
	left: 10,
	width: 375,
}));

export default Menu;
