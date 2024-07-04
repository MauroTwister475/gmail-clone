import { Text, View, ActivityIndicator } from "react-native"

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 items-center justify-center bg-gray-900" />
  )
}
// ActivityIndicator => algo is loading
