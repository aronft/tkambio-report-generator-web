<script setup lang="ts">
import BaseButton from '@/core/components/atoms/BaseButton.vue'
import BaseInput from '@/core/components/atoms/BaseInput.vue'
import BaseModal from '@/core/components/atoms/BaseModal.vue'
import { computed, ref } from 'vue'
import { useReportStore } from '../store/reports.store'
import BaseDatePicker from '@/core/components/atoms/BaseDatePicker.vue'

const reportsStore = useReportStore()
const reportForm = ref({
  title: '',
  dateInit: '',
  dateEnd: '',
})

const isValidForm = computed(() => {
  return (
    reportForm.value.title !== '' &&
    reportForm.value.dateInit !== '' &&
    reportForm.value.dateEnd !== ''
  )
})

const generateReport = async () => {
  await reportsStore.generateReport(reportForm.value)
  reportsStore.closeModal()
}
</script>

<template>
  <BaseModal @close="reportsStore.closeModal()">
    <div class="form-container">
      <div class="form__title">
        <h1>Report por fecha de nacimiento</h1>
        <p class="form__description">Ingresa los siguientes datos para generar su reporte</p>
      </div>
      <form class="report-form" @submit.prevent="generateReport">
        <BaseInput
          v-model="reportForm.title"
          label="Descripción del reporte"
          placeholder="Usuarios nacidos en el 2006"
          required
        />
        <div class="report-form__dates-section">
          <span class="report-form__subtitle">Fecha de nacimiento</span>
          <div class="report-form__dates-row">
            <BaseDatePicker label="Inicio" v-model="reportForm.dateInit" required />
            <BaseDatePicker label="Fin" v-model="reportForm.dateEnd" required />
          </div>
          <BaseButton :disabled="!isValidForm" class="report-form__button" variant="secondary"
            >Generar reporte</BaseButton
          >
        </div>
      </form>
    </div>
  </BaseModal>
</template>

<style lang="scss" scoped>
.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.875rem;
}

.form {
  &__title h1,
  &__description {
    text-align: center;
  }

  &__title h1 {
    margin-bottom: variables.$s-16;
  }

  &__description {
    font-weight: 300;
  }
}

.report-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__subtitle {
    font-weight: 300;
    color: var(--gray-color-600);
    font-size: variables.$fs-12;
  }

  &__dates-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__dates-row {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-bottom: 1.5rem;

    & > * {
      flex: 1;
    }

    @media (min-width: variables.$tablet) {
      flex-direction: row;
    }
  }

  &__button {
    align-self: center;
  }
}
</style>
