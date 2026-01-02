<script setup lang="ts">
import Layout from '@/core/components/objets/Layout.vue'
import ReportList from '../components/ReportList.vue'
import BaseButton from '@/core/components/atoms/BaseButton.vue'
import Container from '@/core/components/objets/Container.vue'
import { useReportStore } from '../store/reports.store'
import { onMounted } from 'vue'
import ReportGeneratorForm from '../components/ReportGeneratorForm.vue'

const reportsStore = useReportStore()

onMounted(() => {
  reportsStore.fetchReports()
})
</script>

<template>
  <Layout>
    <Container class="section">
      <h1>Generador de reportes TK</h1>
      <ReportList
        class="section__list"
        :reports="reportsStore.reports"
        @download="reportsStore.handleDownload"
      />
      <BaseButton variant="secondary" @click="reportsStore.openModal('generator')"
        >Generar reporte</BaseButton
      >
    </Container>
    <ReportGeneratorForm v-if="reportsStore.activeModal === 'generator'" />
  </Layout>
</template>

<style scoped lang="scss">
.section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 55px;

  h1 {
    margin-bottom: 6rem;
    text-align: center;
  }

  &__list {
    margin-bottom: 1.875rem;
  }
}
</style>
