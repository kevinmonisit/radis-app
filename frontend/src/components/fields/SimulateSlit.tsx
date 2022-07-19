import React, { ReactNode } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "../types";
interface TGasProps {
  control: Control<FormValues>;
}
export const TGas: React.FC<TGasProps> = ({ control }) => (
  <Controller
    render={({ field, formState }) => (
      <TextField
        {...field}
        {...formState}
        id="simulate_slit"
        variant="standard"
        type="number"
        label="Simulate Slit"
        onChange={field.onChange}
        value={field.value}
        error={!!formState.errors?.tgas}
        InputProps={{
          endAdornment: <InputAdornment position="end">nm</InputAdornment>,
        }}
        helperText={formState.errors?.simulate_slit?.message as ReactNode}
        onKeyPress={(event) => {
          if (event?.key === "-" || event?.key === "+") {
            event.preventDefault();
          }
        }}
      />
    )}
    name="simulate_slit"
    control={control}
    defaultValue={5}
  />
);
