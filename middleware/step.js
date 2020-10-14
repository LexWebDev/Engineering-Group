export default function ({ store, redirect }) {
  if (!store.state.formData.experience) {
    return redirect('/')
  }
}
