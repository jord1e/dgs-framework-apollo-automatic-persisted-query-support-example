package nl.jrdie.example.dgs_apq.jvmdgs

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class JvmDgsApplication

fun main(args: Array<String>) {
    runApplication<JvmDgsApplication>(*args)
}
