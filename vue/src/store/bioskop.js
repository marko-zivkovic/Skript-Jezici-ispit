import { reactive } from 'vue'

export const store = reactive({
    selectedBioskop: {
        id: '',
        name: '',
        grad: '',
        email: '',
        role: 'user'
    },
    clearSelectedBioskop() {
        this.selectedBioskop.id = ''
        this.selectedBioskop.name = ''
        this.selectedBioskop.grad = ''
    },
    setDataSelectedBioskop(bioskop) {
        this.selectedBioskop.id = bioskop.id
        this.selectedBioskop.name = bioskop.name
        this.selectedBioskop.grad = bioskop.grad
    },
    modalActive: false,
    modalType: '',
    toggleModal() {
        this.modalActive = !this.modalActive
    }
})
