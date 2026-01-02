<script setup lang="ts"></script>

<template>
  <div class="report-list-container">
    <table class="report-list">
      <thead class="report-list__header">
        <tr>
          <slot name="columns"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="rows" />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.report-list-container {
  --table-bg-color: var(--primary-color);
  --table-border-radius: 0.625rem;
  --table-text-color: #fff;
  --table-border-width: 4px;
  --table-border-style: solid;
  --table-border-color: var(--gray-color-200);
  --table-border: var(--table-border-width) var(--table-border-style) var(--table-border-color);

  color: var(--table-text-color);
  background-color: var(--table-bg-color);
  border-radius: var(--table-border-radius);
  width: 100%;
  padding-inline: 1.875rem;
  padding-bottom: 2.5rem;
}

.report-list {
  font-size: variables.$fs-16;
  width: 100%;
  border-collapse: collapse;

  :deep(th),
  :deep(td) {
    font-weight: 400;
    padding-block: 0.75rem;
    text-align: center;
    position: relative;
  }

  :deep(th:first-child),
  :deep(td:first-child) {
    text-align: left;
  }

  :deep(th:last-child),
  :deep(td:last-child) {
    text-align: right;
  }

  &__header {
    border-bottom: var(--table-border);
    margin-bottom: 0.625rem;
  }

  tbody {
    :deep(td) {
      padding-block: 0.625rem;
      position: relative;

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: 0;
        top: 25%;
        height: 50%;
        width: var(--table-border-width);
        background-color: var(--table-border-color);
      }
    }

    &:deep(tr:not(:last-child)) {
      border-bottom: 1px solid var(--table-border-color);
    }
  }
}
</style>
