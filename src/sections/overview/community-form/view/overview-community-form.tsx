import React, {useState} from 'react';

import {Typography,Card,CardContent,Box,FormControl,TextField, Button,MenuItem,Select} from "@mui/material";

export function OverviewCommunityForm() {
    const [image, setImage] = useState<File | null>(null);
    const [description, setDescription] = useState('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission here
    };

    return (
        <Box mt={2}>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Image Upload</Typography>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <br />
                    <br />
                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        fullWidth
                        value={description}
                        onChange={handleDescriptionChange}
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </CardContent>
            </Card>
        </Box>
    );
};
