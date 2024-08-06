<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="header"
                        :class="{ 'highlight-column': index === columnIndex }">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <td :class="{ 'highlight-column': columnIndex === 0 }">
                        <div class="d-flex align-items-center">
                            <img v-if="row.image" :src="row.image" alt="Profile" class="avatar me-3" />
                            <div>
                                <h6 class="mb-0">{{ row.subject }}</h6>
                                <small>{{ row.email }}</small>
                            </div>
                        </div>
                    </td>
                    <td :class="{ 'highlight-column': columnIndex === 1 }">
                        <div>
                            <small :style="whiteSpaceStyle">{{ row.position }}</small>
                        </div>
                    </td>
                    <td :class="{ 'highlight-column': columnIndex === 2 }"> <small :style="whiteSpaceStyle">{{
                        row.status }}</small>
                    </td>
                    <td :class="{ 'highlight-column': columnIndex === 3 }"> <small :style="whiteSpaceStyle">{{ row.date
                            }}</small>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    headers: {
        type: Array,
        default: () => [],
        // required: true,
    },
    rows: {
        type: Array,
        default: () => [],
        // required: true,
    },
    // selectedColumn: String, // New prop for specifying which column to highlight
    selectedColumn: {
        type: String,
        default: '',
    },
});

const columnIndex = computed(() => {
    return props.headers.indexOf(props.selectedColumn);
});


const whiteSpaceStyle = {
    'white-space': 'pre-wrap'
};
</script>

<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 12px;
    /* border: 1px solid #ddd; */
    /* Ensures all cells have full borders */
    text-align: left;
}

.table th {
    background-color: #f4f4f4;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.badge {
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
}

.bg-success {
    background-color: #28a745;
    color: #fff;
}

.bg-danger {
    background-color: #dc3545;
    color: #fff;
}

.my-view-container .table tbody tr:last-child td {
    border-bottom: 2px solid #333;
    /* Increased specificity */
}

.highlight-column {
    background-color: #f0f0ff;
    /* Light blue background for highlighted column */
    /* border-left: 2px solid #666; */
    /* Add a border to clearly define the column */
    /* border-right: 2px solid #666; */
}

small {
    display: block;
    overflow-wrap: break-word;
    /* 긴 텍스트가 영역을 넘어갈 때 자동으로 줄바꿈 처리 */
}
</style>
