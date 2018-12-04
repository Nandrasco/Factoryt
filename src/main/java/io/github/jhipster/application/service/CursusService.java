package io.github.jhipster.application.service;

import io.github.jhipster.application.domain.Cursus;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Cursus.
 */
public interface CursusService {

    /**
     * Save a cursus.
     *
     * @param cursus the entity to save
     * @return the persisted entity
     */
    Cursus save(Cursus cursus);

    /**
     * Get all the cursuses.
     *
     * @return the list of entities
     */
    List<Cursus> findAll();


    /**
     * Get the "id" cursus.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Cursus> findOne(Long id);

    /**
     * Delete the "id" cursus.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
