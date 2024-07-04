import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { DrawerContent } from '@/components/drawer-content';

export default function Layout() {
  // const { status } = useStatusDrawer();
  // alert(status);

  return (
    <Drawer
      defaultStatus={"open"}
      drawerContent={(props) => (<DrawerContent {...props} />)}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "65%",
          // backgroundColor: colors.gray[800],
          borderTopRightRadius: 10,
        }
        // ,drac 
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          title: "Todas as caixas de entradas",
          drawerActiveTintColor: colors.orange[500],
          drawerIcon: () => (
            <MaterialIcons name='email' size={22} />
          )
        }}
      />
    </Drawer>
  );
}
