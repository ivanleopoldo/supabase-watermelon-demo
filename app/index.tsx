import { View, Text } from 'react-native';
import { supabase } from '@/lib/db/supabase';
import React from 'react';

export default function Root() {
  React.useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const { data, error } = await supabase.from('todos').select('*');

    if (data) {
      console.log(data);
    }
  };

  return (
    <View>
      <Text>Root</Text>
    </View>
  );
}
