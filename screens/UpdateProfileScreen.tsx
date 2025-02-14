import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

import colors from '@/config/colors';
import { AppForm, FormField, SubmitButton } from '@/components/forms';
import * as Yup from 'yup';
import IconButton from '@/components/IconButton';
import { useGetCurrentUserQuery } from '@/redux/userApi';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useAuthContext } from '@/contexts/AuthContext';

const validationSchema = Yup.object().shape({});

export default function UpdateProfileScreen() {
  const { data, isLoading, error } = useGetCurrentUserQuery();
  const {
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    address,
  } = data?.data || {};

  // console.log('current user', data);
  // const { user } = useAuthContext();
  // console.log('user', user);

  const { country, city, subcity, woreda } = address || {};

  const profileInitialValues = {
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    country,
    city,
    subcity,
    woreda,
  };

  if (error) {
    return <Text>Error try again</Text>;
  }

  const handleSubmit = (values: any) => {
    console.log('values', values);
  };

  if (isLoading) {
    return <LoadingIndicator message='Loading profile...' />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            bottom: -50,
            left: '38%',
          }}
        >
          <Image
            source={require('@/assets/images/profile/profile-1.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: colors.white,
            }}
          />

          <IconButton
            icon='camera'
            onPress={() => {}}
            color={colors.white}
            buttonStyle={{
              position: 'absolute',
              bottom: 0,
              right: -5,
              width: 40,
              height: 40,
              padding: 5,
              margin: 0,
              borderRadius: 25,
              backgroundColor: colors.grey,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <AppForm
          initialValues={profileInitialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>First name</Text>
            <FormField
              defaultValue={firstName}
              autoCapitalize='none'
              autoCorrect={false}
              name='firstName'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>Last Name</Text>
            <FormField
              defaultValue={lastName}
              autoCapitalize='none'
              autoCorrect={false}
              name='lastName'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>Username</Text>
            <FormField
              defaultValue={username}
              autoCapitalize='none'
              autoCorrect={false}
              name='username'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>

          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>Email</Text>
            <FormField
              defaultValue={email}
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={false}
              name='email'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>Phone number</Text>
            <FormField
              defaultValue={phoneNumber}
              autoCapitalize='none'
              autoCorrect={false}
              name='phoneNumber'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>Date of birth</Text>
            <FormField
              defaultValue={dateOfBirth}
              autoCapitalize='none'
              autoCorrect={false}
              name='phoneNumber'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.labelStyle}>Gender</Text>
            <FormField
              defaultValue={gender}
              autoCapitalize='none'
              autoCorrect={false}
              name='gender'
              containerStyle={styles.containerStyle}
              style={{
                backgroundColor: colors.primaryExtraLight2,
                width: '100%',
                fontSize: 16,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '50%', gap: '10%' }}>
            <View style={{ marginBottom: 5 }}>
              <Text style={styles.labelStyle}>Country</Text>
              <FormField
                defaultValue={country}
                autoCapitalize='none'
                autoCorrect={false}
                name='country'
                containerStyle={styles.containerStyle}
                style={{
                  backgroundColor: colors.primaryExtraLight2,
                  width: '100%',
                  fontSize: 16,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <Text style={styles.labelStyle}>City</Text>
              <FormField
                defaultValue={city}
                autoCapitalize='none'
                autoCorrect={false}
                name='city'
                containerStyle={styles.containerStyle}
                style={{
                  backgroundColor: colors.primaryExtraLight2,
                  width: '100%',
                  fontSize: 16,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', width: '50%', gap: '10%' }}>
            <View style={{ marginBottom: 5 }}>
              <Text style={styles.labelStyle}>Subcity</Text>
              <FormField
                defaultValue={subcity}
                autoCapitalize='none'
                autoCorrect={false}
                name='subcity'
                containerStyle={styles.containerStyle}
                style={{
                  backgroundColor: colors.primaryExtraLight2,
                  width: '100%',
                  fontSize: 16,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{ marginBottom: 5 }}>
              <Text style={styles.labelStyle}>Wereda</Text>
              <FormField
                defaultValue={woreda}
                autoCapitalize='none'
                autoCorrect={false}
                name='woreda'
                containerStyle={styles.containerStyle}
                style={{
                  backgroundColor: colors.primaryExtraLight2,
                  width: '100%',
                  fontSize: 16,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>

          <SubmitButton label='Update' />
        </AppForm>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  header: {
    position: 'relative',
    height: 90,
    width: '100%',
    backgroundColor: colors.primary,
    padding: 20,
    marginBottom: 50,
  },
  marginBottom: {
    marginBottom: 10,
  },
  inputLabel: { marginBottom: 0, fontWeight: '600' },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    width: 150,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  labelStyle: { fontSize: 18, fontWeight: '500' },
  containerStyle: {
    marginVertical: 5,
    borderRadius: 10,
    borderColor: colors.primary,
    padding: 0,
  },
});
