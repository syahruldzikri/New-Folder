- import { DrawerNavigator } from 'react-navigation';
+ import { DrawerNavigator, DrawerItems } from 'react-navigation';

const App = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
-}
+}, {
+  contentComponent: (props) => (
+    <View>
+      <Text>Custom Header</Text>
+      <DrawerItems {...props} />
+      <Text>Custom Footer</Text>
+    </View>
+  )
});
