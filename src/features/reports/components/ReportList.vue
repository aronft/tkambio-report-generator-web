<script setup lang="ts">
import Table from '@/core/components/Table.vue'
import type { Report } from '../types/reports.types'
import BaseIcon from '@/core/components/atoms/BaseIcon.vue'
import BaseLink from '@/core/components/atoms/BaseLink.vue'

const props = defineProps<{
  reports: Report[]
}>()

const emit = defineEmits<{
  (e: 'download', id: number): void
}>()

const handleDownload = (id: number) => {
  emit('download', id)
}
</script>

<template>
  <Table>
    <template #columns>
      <th>Titulo</th>
      <th>Fecha de creación</th>
      <th>Acciones</th>
    </template>

    <template #rows>
      <p v-if="reports.length === 0" class="report-list__empty">Sin registrtos</p>
      <template v-else>
        <tr v-for="report in reports" :key="report.id">
          <td>{{ report.title }}</td>
          <td>{{ report.created_at }}</td>
          <td>
            <button class="download-link" @click="handleDownload(report.id)">
              Descargar
              <BaseIcon name="download" />
            </button>
          </td>
        </tr>
      </template>
    </template>
  </Table>
</template>

<style lang="scss" scoped>
.download-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;
  gap: 0.625rem;
  font-weight: 600;
  color: var(--body-color);
}

.report-list__empty {
  text-align: center;
}
</style>
