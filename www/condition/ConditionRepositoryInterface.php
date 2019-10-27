<?php
namespace condition;

interface ConditionRepositoryInterface {
    function getAll(): iterable;
    function getById(int $id): ?Condition;
    function add(int $id, string $condition): Condition;
    function update(Condition $condition);
    function removeById(int $id);
}