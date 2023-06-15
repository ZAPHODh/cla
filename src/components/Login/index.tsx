import { FormEvent, useState } from 'react';
import { Heading } from '../Heading';
import { Input } from '../Input';
import * as Styled from './styles';
import { Roboto } from 'next/font/google';
import { Button } from '../Button';
export type NewChar = {
  charName: string;
  position: string;
  classChar: string;
  sky: string;
  chi: string | number;
  damage: string | number;
  survivor: string | number;
};
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
export const LoginForm = () => {
  const [newChar, setNewChar] = useState<NewChar>({
    charName: '',
    classChar: '',
    position: 'Primário',
    chi: '',
    damage: '',
    survivor: '',
    sky: '',
  });

  const handleSchedule = async () => {
    try {
      const res = await fetch('/api/char', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newChar),
      });

      if (!res.ok) {
        const error = await res.text();
        alert(error);
        return;
      }

      setNewChar({
        charName: '',
        classChar: '',
        position: 'Primário',
        chi: '',
        damage: '',
        survivor: '',
        sky: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main>
      <Styled.Wrapper>
        <Styled.Form id="Login-Form">
          <Heading as="h1">Cadastre o seu char!</Heading>
          <Styled.Label htmlFor="Input-Name" className={roboto.className}>
            Nome
          </Styled.Label>
          <Input
            id={'Input-Name'}
            placeholder="PunishmenT"
            value={newChar.charName}
            onChange={(e) => {
              setNewChar((previous) => {
                return { ...previous, charName: e.target.value };
              });
            }}
            width={'100%'}
            height={'32px'}
            className={roboto.className}
          ></Input>
          <Styled.Label htmlFor="Input-Class" className={roboto.className}>
            Classe
          </Styled.Label>
          <Input
            id={'Input-Class'}
            placeholder="Mago"
            value={newChar.classChar}
            onChange={(e) => {
              setNewChar((previous) => {
                return { ...previous, classChar: e.target.value };
              });
            }}
            width={'100%'}
            height={'32px'}
            className={roboto.className}
          ></Input>
          <Styled.Label htmlFor="Input-Ceu" className={roboto.className}>
            Céu
          </Styled.Label>
          <Input
            id={'Input-Ceu'}
            placeholder="Céu Arcano IV"
            value={newChar.sky}
            onChange={(e) => {
              setNewChar((previous) => {
                return { ...previous, sky: e.target.value };
              });
            }}
            width={'100%'}
            height={'32px'}
            className={roboto.className}
          ></Input>
          <Styled.Label htmlFor="Input-Spirit" className={roboto.className}>
            Espírito
          </Styled.Label>
          <Input
            id={'Input-Spirit'}
            placeholder="Chi"
            value={newChar.chi.toString()}
            onChange={(e) => {
              setNewChar((previous) => {
                return { ...previous, chi: parseInt(e.target.value) };
              });
            }}
            width={'100%'}
            height={'32px'}
            className={roboto.className}
          ></Input>
          <Styled.Label htmlFor="Input-Dano" className={roboto.className}>
            Índice de dano
          </Styled.Label>
          <Input
            id={'Input-Dano'}
            placeholder="Simulador > Indice de dano"
            value={newChar.damage.toString()}
            onChange={(e) => {
              setNewChar((previous) => {
                return { ...previous, damage: parseInt(e.target.value) };
              });
            }}
            width={'100%'}
            height={'32px'}
            className={roboto.className}
          ></Input>
          <Styled.Label htmlFor="Input-Survivor" className={roboto.className}>
            Sobrevivência
          </Styled.Label>
          <Input
            id={'Input-Survivor'}
            placeholder="Simulador > Sobrevivência"
            value={newChar.survivor.toString()}
            onChange={(e) => {
              setNewChar((previous) => {
                return { ...previous, survivor: parseInt(e.target.value) };
              });
            }}
            width={'100%'}
            height={'32px'}
            className={roboto.className}
          ></Input>
          <Styled.Label htmlFor="Input-Name" className={roboto.className}>
            Posição
          </Styled.Label>
          <Styled.RadioContainer>
            <input
              type="radio"
              name="choose"
              id="primary"
              value="Primário"
              onClick={() =>
                setNewChar((previous) => {
                  return {
                    ...previous,
                    position: 'Primário',
                  };
                })
              }
            />
            <label htmlFor="primary">Primário</label>
            <input
              type="radio"
              name="choose"
              id="secondary"
              value="Secundário"
              onClick={() =>
                setNewChar((previous) => {
                  return {
                    ...previous,
                    position: 'Secundário',
                  };
                })
              }
            />
            <label htmlFor="secondary">Secundário</label>
          </Styled.RadioContainer>

          <Styled.ButtonContainer>
            <Button
              reverse={true}
              width={'111px'}
              disabled={
                newChar.charName === '' ||
                newChar.chi === 0 ||
                newChar.sky === '' ||
                newChar.damage === 0 ||
                newChar.survivor === 0
                  ? true
                  : false
              }
              onClick={(e: FormEvent) => {
                e.preventDefault();
                handleSchedule();
              }}
            >
              Cadastrar
            </Button>
          </Styled.ButtonContainer>
        </Styled.Form>
      </Styled.Wrapper>
    </main>
  );
};
