import React from 'react';
import { RadioButton } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';

export default function ChangeTheme({ themeMode, onSave, onToast }) {
  return (
    <ScreenWrapper hasBack title="Change theme">
      <RadioButton.Group onValueChange={value => onSave(value)} value={themeMode}>
        <RadioButton.Item label="Dark mode" value="dark" />
        <RadioButton.Item label="Light mode" value="light" />
      </RadioButton.Group>
    </ScreenWrapper>
  );
}
