import { FormEvent, useState } from 'react';
import { Heading } from '../Heading';
import { Input } from '../Input';
import * as Styled from './styles';
import { Roboto } from 'next/font/google';
import { Button } from '../Button';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
export const LoginForm = () => {
  const [charName, setCharName] = useState<string>('');
  const [position, setPosition] = useState<string>('Primário');
  const handleSchedule = async () => {
    try {
      const res = await fetch('/api/char', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ charName, position }),
      });

      if (!res.ok) {
        const error = await res.text();
        alert(error);
        return;
      }

      setCharName('');
      setPosition('Primário');
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
            placeholder="Luis Martins"
            value={charName}
            onChange={(e) => {
              setCharName(e.target.value);
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
              onClick={(e) => setPosition(e.currentTarget.value)}
            />
            <label htmlFor="primary">Primário</label>
            <input
              type="radio"
              name="choose"
              id="secondary"
              value="Secundário"
              onClick={(e) => setPosition(e.currentTarget.value)}
            />
            <label htmlFor="secondary">Secundário</label>
          </Styled.RadioContainer>
          <Styled.ButtonContainer>
            <Button
              reverse={true}
              width={'111px'}
              disabled={charName === '' ? true : false}
              onClick={(e: FormEvent) => {
                e.preventDefault();
                if (charName === '') return;
                if (position === '') return;
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
