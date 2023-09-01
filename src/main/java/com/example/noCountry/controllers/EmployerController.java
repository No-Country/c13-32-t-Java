package com.example.noCountry.controllers;



import com.example.noCountry.Entity.Employer;
import com.example.noCountry.Services.ImageuploadService;
import com.example.noCountry.Services.employerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.net.MalformedURLException;

@Controller
@RequestMapping("/employers")
public class EmployerController {

    @Autowired
    private employerService employer;

    @Autowired
    private ImageuploadService image;

    @GetMapping(value = "/uploads/{filename:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        Resource resource = null;
        try {
            resource = image.load(filename);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.IMAGE_JPEG) // Cambia el tipo de contenido según tus necesidades
                .body(resource);
    }
    @PostMapping("/save")
    public String saveMeme(@Validated @ModelAttribute("meme") Employer employer, BindingResult result,
                           @RequestParam("file") MultipartFile image, SessionStatus status)
            throws Exception {
        if (result.hasErrors()) {
            System.out.println(result.getFieldError());
            return "/employers";
        } else {
            if (!image.isEmpty()) {
                if (employer.getId() > 0 && employer.getImage() != null && !employer.getImage().isEmpty()) {
                    ImageuploadService.delete(employer.getImage());
                }
                String uniqueFileName = ImageuploadService.copy(image);
                employer.setImage(uniqueFileName);
            }
            employerService.crearEmployer(employer);
            status.setComplete();
        }
        return "/employers";
    }


}
