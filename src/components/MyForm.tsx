import React, { FormEvent } from "react";
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button";
import Box from "@mui/material/Box";

interface FormContainerProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FormContainer = styled("form")<FormContainerProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: "400px",
  margin: theme.spacing(0, "auto"),
}));

const FormField = styled(TextField)<TextFieldProps>({
  width: "100%",
});

const SubmitButton = styled(Button)<ButtonProps>({
  width: "150px",
  margin: "0 auto",
});

const CardContainer = styled(Box)(({ theme }) => ({
  padding: "1rem",
  boxShadow: theme.shadows[1],
  borderRadius: theme.spacing(0.5),
  width: "30%",
  margin: theme.spacing(0, "auto"),
}));

const MyForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <CardContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormField label="Name" variant="outlined" />
        <FormField label="Email" variant="outlined" />
        <FormField label="Message" variant="outlined" multiline rows={4} />
        <SubmitButton type="submit" variant="contained" color="primary">
          Submit
        </SubmitButton>
      </FormContainer>
    </CardContainer>
  );
};

export default MyForm;
