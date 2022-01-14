import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React, { useState } from "react";
import { useLocalContext } from "../../context/context";
import Form from "./Form";
import "./style.css";
const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  const [check, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createClassDialog}
        maxWidth={showForm ? "lg" : "xs"}
        className="form__dialog"
      >
        {showForm ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Vrei sa creezi o caclasa?
            </div>
            <DialogContent className="class__content">
              <p className="class__text">
                <p>Daca da, ei bine ai ocaziaunea sa o faci chiar acum</p>
                <a href="/help" className="class__link">
                  Caclasa pentru o cacare mai cu sens.
                </a>
              </p>
              <p>
                  Educatie chiar de la sef
                <a href="/privacy" className="class__link2 class__link">
                  Seciuritate si cacat privat.
                </a>
                Protectie impotriva Hacacaerilor de rahat.
              </p>

              <div className="class__checkboxWrapper">
                <Checkbox color="primary" onChange={() => setChecked(!check)} />
                <p>
                  Am citit cacagulamentu lol.
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                Inchide.
              </Button>

              <Button
                autoFocus
                color="primary"
                disabled={!check}
                onClick={() => setShowForm(true)}
              >
                Continua cacre.
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default CreateClass;
