import React from 'react';
import Button from '../../atoms/button/button';
import InputCode from '../../atoms/input-code/inputCode';
import Input from '../../atoms/input/input'
import { Separator } from './landing.style';

/**
 * This render the Landing template.
 */
const Landing = () => (
  <Separator>
    <Separator>
      <Button loading customStyle="margin: 10px;" handleClick={() => console.log('FOOOI')}>
        loading
      </Button>
    </Separator>
    <Separator>
      <Button customStyle="margin: 10px;" handleClick={() => console.log('FOOOI')}>
        primary
      </Button>
    </Separator>
    <Separator>
      <Button type="secondary" customStyle="margin: 10px;" handleClick={() => console.log('FOOOI')}>
        secondary
      </Button>
    </Separator>
    <Separator>
      <Button type="tertiary" handleClick={() => console.log('FOOOI')}>
        tertiary
      </Button>
    </Separator>
    <Separator>
      <Button handleClick={() => console.log('FOOOI')} disabled>
        disabled
      </Button>
    </Separator>
    <Separator>
      <Input placeholder="Texto" />
    </Separator>
    <Separator>
      <Input placeholder="Texto" filled={true} />
    </Separator>
    <Separator>
      <Input placeholder="Texto" success={true} />
    </Separator>
    <Separator>
      <Input placeholder="Texto" error={true} />
    </Separator>
    <Separator>
      <InputCode id="maninho" length={4} />
    </Separator>
    <Separator>
      <InputCode id="maninho0" length={4} filled={true} />
    </Separator>
    <Separator>
      <InputCode id="maninho1" length={4} success={true} />
    </Separator>
    <Separator>
      <InputCode id="maninho2" length={4} error={true} />
    </Separator>
  </Separator>
);

export default Landing;
