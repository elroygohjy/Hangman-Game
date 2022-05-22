import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

interface keyboardProps {
  className: string;
}

const Keyboard = ({ className }: keyboardProps) => {
  const [q, setQ] = useState(false);
  const [w, setW] = useState(false);
  const [e, setE] = useState(false);
  const [r, setR] = useState(false);
  const [t, setT] = useState(false);
  const [y, setY] = useState(false);
  const [u, setU] = useState(false);
  const [i, setI] = useState(false);
  const [o, setO] = useState(false);
  const [p, setP] = useState(false);
  const [a, setA] = useState(false);
  const [s, setS] = useState(false);
  const [d, setD] = useState(false);
  const [f, setF] = useState(false);
  const [g, setG] = useState(false);
  const [h, setH] = useState(false);
  const [j, setJ] = useState(false);
  const [k, setK] = useState(false);
  const [l, setL] = useState(false);
  const [z, setZ] = useState(false);
  const [x, setX] = useState(false);
  const [c, setC] = useState(false);
  const [v, setV] = useState(false);
  const [b, setB] = useState(false);
  const [n, setN] = useState(false);
  const [m, setM] = useState(false);
  return (
    <>
      <Grid container spacing={2} padding={2} className={className}>
        <Grid item xs={2}>
          <Button
            variant={q ? 'contained' : 'outlined'}
            color={q ? 'success' : 'secondary'}
            disabled={q ? true : false}
            onClick={() => {
              setQ(true);
            }}
          >
            Q
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={w ? 'contained' : 'outlined'}
            color={w ? 'success' : 'secondary'}
            disabled={w ? true : false}
            onClick={() => {
              setW(true);
            }}
          >
            W
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={e ? 'contained' : 'outlined'}
            color={e ? 'success' : 'secondary'}
            disabled={e ? true : false}
            onClick={() => {
              setE(true);
            }}
          >
            E
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={r ? 'contained' : 'outlined'}
            color={r ? 'success' : 'secondary'}
            disabled={r ? true : false}
            onClick={() => {
              setR(true);
            }}
          >
            R
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={t ? 'contained' : 'outlined'}
            color={t ? 'success' : 'secondary'}
            disabled={t ? true : false}
            onClick={() => {
              setT(true);
            }}
          >
            T
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={y ? 'contained' : 'outlined'}
            color={y ? 'success' : 'secondary'}
            disabled={y ? true : false}
            onClick={() => {
              setY(true);
            }}
          >
            Y
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={u ? 'contained' : 'outlined'}
            color={u ? 'success' : 'secondary'}
            disabled={u ? true : false}
            onClick={() => {
              setU(true);
            }}
          >
            U
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={i ? 'contained' : 'outlined'}
            color={i ? 'success' : 'secondary'}
            disabled={i ? true : false}
            onClick={() => {
              setI(true);
            }}
          >
            I
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={o ? 'contained' : 'outlined'}
            color={o ? 'success' : 'secondary'}
            disabled={o ? true : false}
            onClick={() => {
              setO(true);
            }}
          >
            O
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={p ? 'contained' : 'outlined'}
            color={p ? 'success' : 'secondary'}
            disabled={p ? true : false}
            onClick={() => {
              setP(true);
            }}
          >
            P
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={a ? 'contained' : 'outlined'}
            color={a ? 'success' : 'secondary'}
            disabled={a ? true : false}
            onClick={() => {
              setA(true);
            }}
          >
            A
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={s ? 'contained' : 'outlined'}
            color={s ? 'success' : 'secondary'}
            disabled={s ? true : false}
            onClick={() => {
              setS(true);
            }}
          >
            S
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={d ? 'contained' : 'outlined'}
            color={d ? 'success' : 'secondary'}
            disabled={d ? true : false}
            onClick={() => {
              setD(true);
            }}
          >
            D
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={f ? 'contained' : 'outlined'}
            color={f ? 'success' : 'secondary'}
            disabled={f ? true : false}
            onClick={() => {
              setF(true);
            }}
          >
            F
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={g ? 'contained' : 'outlined'}
            color={g ? 'success' : 'secondary'}
            disabled={g ? true : false}
            onClick={() => {
              setG(true);
            }}
          >
            G
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={h ? 'contained' : 'outlined'}
            color={h ? 'success' : 'secondary'}
            disabled={h ? true : false}
            onClick={() => {
              setH(true);
            }}
          >
            H
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={j ? 'contained' : 'outlined'}
            color={j ? 'success' : 'secondary'}
            disabled={j ? true : false}
            onClick={() => {
              setJ(true);
            }}
          >
            J
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={k ? 'contained' : 'outlined'}
            color={k ? 'success' : 'secondary'}
            disabled={k ? true : false}
            onClick={() => {
              setK(true);
            }}
          >
            K
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={l ? 'contained' : 'outlined'}
            color={l ? 'success' : 'secondary'}
            disabled={l ? true : false}
            onClick={() => {
              setL(true);
            }}
          >
            L
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={z ? 'contained' : 'outlined'}
            color={z ? 'success' : 'secondary'}
            disabled={z ? true : false}
            onClick={() => {
              setZ(true);
            }}
          >
            Z
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={x ? 'contained' : 'outlined'}
            color={x ? 'success' : 'secondary'}
            disabled={x ? true : false}
            onClick={() => {
              setX(true);
            }}
          >
            X
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={c ? 'contained' : 'outlined'}
            color={c ? 'success' : 'secondary'}
            disabled={c ? true : false}
            onClick={() => {
              setC(true);
            }}
          >
            C
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={v ? 'contained' : 'outlined'}
            color={v ? 'success' : 'secondary'}
            disabled={v ? true : false}
            onClick={() => {
              setV(true);
            }}
          >
            V
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={b ? 'contained' : 'outlined'}
            color={b ? 'success' : 'secondary'}
            disabled={b ? true : false}
            onClick={() => {
              setB(true);
            }}
          >
            B
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={n ? 'contained' : 'outlined'}
            color={n ? 'success' : 'secondary'}
            disabled={n ? true : false}
            onClick={() => {
              setN(true);
            }}
          >
            N
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant={m ? 'contained' : 'outlined'}
            color={m ? 'success' : 'secondary'}
            disabled={m ? true : false}
            onClick={() => {
              setM(true);
            }}
          >
            M
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Keyboard;
